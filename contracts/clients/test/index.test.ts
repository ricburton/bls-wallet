import "source-map-support/register";

import * as ethers from "ethers";
import { BigNumber } from "ethers";
import { expect } from "chai";

import { initBlsWalletSigner, Bundle, Operation } from "../src/signer";

import Range from "./helpers/Range";

const keccak256 = ethers.utils.keccak256;
const arrayify = ethers.utils.arrayify;

const domain = arrayify(keccak256("0xfeedbee5"));
const weiPerToken = BigNumber.from(10).pow(18);

const samples = (() => {
  const dummy256HexString = "0x" + "0123456789".repeat(10).slice(0, 64);
  const contractAddress = dummy256HexString;

  const bundleTemplate: Operation = {
    nonce: BigNumber.from(123),
    actions: [
      {
        ethValue: BigNumber.from(0),
        contractAddress,
        encodedFunction: "0x00",
      },
      {
        ethValue: BigNumber.from(1),
        contractAddress,
        encodedFunction: "0x00",
      },
    ],
  };

  const privateKey = dummy256HexString;
  const otherPrivateKey = "0xaa" + privateKey.slice(4);

  return {
    contractAddress,
    bundleTemplate,
    privateKey,
    otherPrivateKey,
  };
})();

describe("index", () => {
  it("signs and verifies transaction", async () => {
    const { sign, verify } = await initBlsWalletSigner({
      chainId: 123,
      domain,
    });

    const { bundleTemplate, privateKey, otherPrivateKey } = samples;

    const bundle = sign(bundleTemplate, privateKey);

    expect(bundle.signature).to.deep.equal([
      "0x0058b38298f3c486223de7c61f461ff3b47530d2619a383e49b298a56249e4fb",
      "0x0bf8beb03979073e57656af0a5bab043fe2d6bf4cbbf600f6a7190ce95fcf69c",
    ]);

    expect(verify(bundle)).to.equal(true);

    const bundleBadSig = {
      ...bundle,
      signature: sign(bundleTemplate, otherPrivateKey).signature,
    };

    expect(verify(bundleBadSig)).to.equal(false);

    const bundleBadMessage: Bundle = {
      senderPublicKeys: bundle.senderPublicKeys,
      operations: [
        {
          ...bundle.operations[0],
          actions: [
            {
              ...bundle.operations[0].actions[0],
              // Pretend the client signed to pay a million tokens
              ethValue: weiPerToken.mul(1000000),
            },
            ...bundle.operations[0].actions.slice(1),
          ],
        },
      ],
      signature: bundle.signature,
    };

    expect(verify(bundleBadMessage)).to.equal(false);
  });

  it("aggregates transactions", async () => {
    const { sign, aggregate, verify } = await initBlsWalletSigner({
      chainId: 123,
      domain,
    });

    const { bundleTemplate, privateKey } = samples;

    const bundle1 = sign(bundleTemplate, privateKey);
    const bundle2 = aggregate([bundle1, bundle1]);

    expect(bundle2.signature).to.deep.equal([
      "0x091727df1b9834b31111c1d5c1e15989350de678232e46898c1c3c788e3c26ab",
      "0x1f69e3373d329564e875a1401c0b7a4a6f7ab3e9cf93ef73b59a1feb3286e693",
    ]);

    expect(verify(bundle2)).to.equal(true);

    const bundle2BadMessage: Bundle = {
      ...bundle2,
      operations: [
        bundle2.operations[0],
        {
          ...bundle2.operations[1],

          // Pretend this client signed to pay a million tokens
          actions: [
            {
              ...bundle2.operations[1].actions[0],
              ethValue: weiPerToken.mul(1000000),
            },
            ...bundle2.operations[1].actions.slice(1),
          ],
        },
      ],
    };

    expect(verify(bundle2BadMessage)).to.equal(false);
  });

  it("can aggregate transactions which already have multiple subTransactions", async () => {
    const { sign, aggregate, verify } = await initBlsWalletSigner({
      chainId: 123,
      domain,
    });

    const { bundleTemplate, privateKey } = samples;

    const bundles = Range(4).map((i) =>
      sign(
        {
          ...bundleTemplate,
          actions: [
            {
              ...bundleTemplate.actions[0],
              ethValue: BigNumber.from(i),
            },
          ],
        },
        privateKey,
      ),
    );

    const aggBundle1 = aggregate(bundles.slice(0, 2));
    const aggBundle2 = aggregate(bundles.slice(2, 4));

    const aggAggBundle = aggregate([aggBundle1, aggBundle2]);

    expect(verify(aggAggBundle)).to.equal(true);
  });

  it("generates expected publicKeyStr", async () => {
    const { getPublicKeyStr } = await initBlsWalletSigner({
      chainId: 123,
      domain,
    });

    expect(getPublicKeyStr(samples.privateKey)).to.equal(
      [
        "0x",
        "0127eaaf599e0e5997ebff004ae96b61afef4c35d9d67277ebd32a08bc42e2eb",
        "01dc98a8d2e5ac73933935dbb2888c6719914e86f14de30bf441b951867e27cd",
        "2f29d73e617ee30597f79b3fe567a11eb3bea1a2625ccb3fcb9635edf1d2f429",
        "27fac8b975dd299618e7f48753fdfa492f11f701445cdd7c3ca98bf5c386ec65",
      ].join(""),
    );
  });
});
