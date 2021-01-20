/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides
} from "@ethersproject/contracts";
import {BytesLike} from "@ethersproject/bytes";
import {Listener, Provider} from "@ethersproject/providers";
import {FunctionFragment, EventFragment, Result} from "@ethersproject/abi";

interface ChooserInterface extends ethers.utils.Interface {
  functions: {
    "getProposer()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getProposer",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getProposer",
    data: BytesLike
  ): Result;

  events: {};
}

export class Chooser extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ChooserInterface;

  functions: {
    getProposer(
      overrides?: CallOverrides
    ): Promise<{
      proposer: string;
      0: string;
    }>;

    "getProposer()"(
      overrides?: CallOverrides
    ): Promise<{
      proposer: string;
      0: string;
    }>;
  };

  getProposer(overrides?: CallOverrides): Promise<string>;

  "getProposer()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getProposer(overrides?: CallOverrides): Promise<string>;

    "getProposer()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getProposer(overrides?: CallOverrides): Promise<BigNumber>;

    "getProposer()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getProposer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getProposer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
