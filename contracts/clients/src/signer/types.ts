import { BigNumber } from "@ethersproject/bignumber";
import { VerificationGateway } from "../../typechain";

export type Bundle = Parameters<VerificationGateway["processBundle"]>[0];
export type Operation = Bundle["operations"][number];

export type PublicKey = Bundle["senderPublicKeys"][number];
export type Signature = Bundle["signature"];

export type ActionData = {
  ethValue: BigNumber;
  contractAddress: string;
  encodedFunction: string;
};

export type ActionDataDto = {
  ethValue: string;
  contractAddress: string;
  encodedFunction: string;
};

export type OperationDto = {
  nonce: string;
  actions: ActionDataDto[];
};

export type BundleDto = {
  senderPublicKeys: [string, string, string, string][];
  operations: OperationDto[];
  signature: [string, string];
};
