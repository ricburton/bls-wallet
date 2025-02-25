#!/usr/bin/env -S deno run --allow-net --allow-env --allow-read --allow-write --unstable

import { delay, ethers } from "../deps.ts";

import EthereumService from "../src/app/EthereumService.ts";
import * as env from "../test/env.ts";
import MockErc20 from "../test/helpers/MockErc20.ts";
import TestBlsWallets from "./helpers/TestBlsWallets.ts";
import getNetworkConfig from "../src/helpers/getNetworkConfig.ts";

const { addresses } = await getNetworkConfig();

const provider = new ethers.providers.JsonRpcProvider(env.RPC_URL);
const ethereumService = await EthereumService.create(
  (evt) => {
    console.log(evt);
  },
  addresses.verificationGateway,
  env.PRIVATE_KEY_AGG,
);

const testErc20 = new MockErc20(addresses.testToken, provider);
const [wallet] = await TestBlsWallets(provider, 1);
const startBalance = await testErc20.balanceOf(wallet.address);

const bundle = wallet.sign({
  nonce: await wallet.Nonce(),
  actions: [{
    ethValue: 0,
    contractAddress: testErc20.contract.address,
    encodedFunction: testErc20.contract.interface.encodeFunctionData(
      "mint",
      [wallet.address, 20],
    ),
  }],
});

console.log("Sending via ethereumService");

(async () => {
  try {
    await ethereumService.submitBundle(bundle);
  } catch (error) {
    console.error(error.stack);
    Deno.exit(1);
  }
})();

while (true) {
  const balance = (await testErc20.balanceOf(wallet.address));

  console.log({
    startBalance: startBalance.toString(),
    balance: balance.toString(),
  });

  if (!balance.eq(startBalance)) {
    console.log("done");
    break;
  }

  console.log("Balance has not increased, waiting 500ms");
  await delay(500);
}
