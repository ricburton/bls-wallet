/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import {TestTx} from "./TestTx";

export class TestTxFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestTx> {
    return super.deploy(overrides || {}) as Promise<TestTx>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestTx {
    return super.attach(address) as TestTx;
  }
  connect(signer: Signer): TestTxFactory {
    return super.connect(signer) as TestTxFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TestTx {
    return new Contract(address, _abi, signerOrProvider) as TestTx;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "txs",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "create2TransferDecode",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "fromIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "toIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "toPubkeyID",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256"
          }
        ],
        internalType: "struct Tx.Create2Transfer",
        name: "",
        type: "tuple"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "txs",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      },
      {
        internalType: "uint256[4]",
        name: "to",
        type: "uint256[4]"
      }
    ],
    name: "create2TransferMessageOf",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "txs",
        type: "bytes"
      }
    ],
    name: "create2transferHasExcessData",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "fromIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "toIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "toPubkeyID",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256"
          }
        ],
        internalType: "struct Tx.Create2Transfer[]",
        name: "txs",
        type: "tuple[]"
      }
    ],
    name: "create2transferSerialize",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "txs",
        type: "bytes"
      }
    ],
    name: "create2transferSize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "txs",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "massMigrationDecode",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "fromIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256"
          }
        ],
        internalType: "struct Tx.MassMigration",
        name: "_tx",
        type: "tuple"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "txs",
        type: "bytes"
      }
    ],
    name: "massMigrationSize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "testEncodeDecimal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "fromIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256"
          }
        ],
        internalType: "struct Tx.MassMigration",
        name: "_tx",
        type: "tuple"
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "spokeID",
        type: "uint256"
      }
    ],
    name: "testMassMigrationMessageOf",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "txs",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "transferDecode",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "fromIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "toIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256"
          }
        ],
        internalType: "struct Tx.Transfer",
        name: "",
        type: "tuple"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "txs",
        type: "bytes"
      }
    ],
    name: "transferHasExcessData",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "txs",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      }
    ],
    name: "transferMessageOf",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "fromIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "toIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256"
          }
        ],
        internalType: "struct Tx.Transfer[]",
        name: "txs",
        type: "tuple[]"
      }
    ],
    name: "transferSerialize",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "txs",
        type: "bytes"
      }
    ],
    name: "transferSize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061143d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80637cef563f1161008c578063c0bea13c11610066578063c0bea13c146101ea578063c2b378361461020a578063e177b4fe1461022a578063e9b344cb1461023d576100ea565b80637cef563f146101b15780639a06678f146101c4578063bf20a9df146101d7576100ea565b8063419dce2a116100c8578063419dce2a1461014b57806361dd46711461015e57806364ab8e801461017e5780636e0af50f14610191576100ea565b80631c5f31f7146100ef5780633283ae43146101185780633bad0c7f14610138575b600080fd5b6101026100fd366004610c5a565b610250565b60405161010f919061124b565b60405180910390f35b61012b610126366004610cc4565b610261565b60405161010f9190611296565b61012b610146366004610cc4565b61026c565b610102610159366004610dae565b610277565b61017161016c366004610cc4565b610296565b60405161010f919061123d565b61012b61018c366004610e69565b6102a1565b6101a461019f366004610cf9565b6102ac565b60405161010f9190611288565b6101716101bf366004610cc4565b6102c5565b6101026101d2366004610c8f565b6102d0565b6101026101e5366004610d4a565b6102db565b6101fd6101f8366004610cf9565b6102f8565b60405161010f919061127a565b61021d610218366004610cf9565b610310565b60405161010f919061126c565b61012b610238366004610cc4565b610322565b61010261024b366004610e26565b61032d565b606061025b8261033a565b92915050565b600061025b826104b9565b600061025b826104cd565b606061028d61028686866104da565b848461055d565b95945050505050565b600061025b8261059f565b600061025b826105b5565b6102b46108e7565b6102be838361062d565b9392505050565b600061025b826106a0565b606061025b826106ad565b60606102f06102ea858561062d565b83610805565b949350505050565b61030061090f565b6102be838363ffffffff61084a16565b610318610930565b6102be83836104da565b600061025b826108b0565b60606102f08484846108bd565b60606000825190506060816010026040519080825280601f01601f191660200182016040528015610372576020820181803883390190505b50905060005b828110156104b157600085828151811061038e57fe5b602002602001015160000151905060008683815181106103aa57fe5b602002602001015160200151905060008784815181106103c657fe5b602002602001015160400151905060008885815181106103e257fe5b602002602001015160600151905060008986815181106103fe57fe5b6020026020010151608001519050606085858561041a866105b5565b610423866105b5565b60405160200161043795949392919061117a565b60408051601f1981840301815291905290506010870260005b601081101561049d5782818151811061046557fe5b602001015160f81c60f81b8a8383018151811061047e57fe5b60200101906001600160f81b031916908160001a905350600101610450565b505060019096019550610378945050505050565b509392505050565b600060108251816104c657fe5b0492915050565b6000600c8251816104c657fe5b6104e2610930565b50600460108281028401918201516008830151600c80850151600e86015195909401516040805160a08101825263ffffffff958616815293851660208501529490931693820193909352600f84841c8116600a90810a610fff9687160260608401529383901c1690920a921691909102608082015292915050565b6060600384600001518385876060015188608001516040516020016105879695949392919061108c565b60405160208183030381529060405290509392505050565b600060108251816105ac57fe5b06151592915050565b60008181805b600f8110156105f75782158015906105d45750600a8306155b156105ea57600a830492506001820191506105ef565b6105f7565b6001016105bb565b50610fff8211156106235760405162461bcd60e51b815260040161061a9061125c565b60405180910390fd5b600c1b0192915050565b6106356108e7565b506004600c8281028401918201516008830151600a80850151948401516040805160808101825263ffffffff9586168152939094166020840152600f86861c8116830a610fff97881602948401949094529384901c90921690910a9190921602606082015292915050565b6000600c8251816105ac57fe5b6060600082519050606081600c026040519080825280601f01601f1916602001820160405280156106e5576020820181803883390190505b50905060005b828110156104b157600085828151811061070157fe5b6020026020010151600001519050600086838151811061071d57fe5b6020026020010151602001519050600061074d88858151811061073c57fe5b6020026020010151604001516105b5565b9050600061077189868151811061076057fe5b6020026020010151606001516105b5565b905060608484848460405160200161078c9493929190611132565b60408051601f198184030181529190529050600c860260005b600c8110156107f2578281815181106107ba57fe5b602001015160f81c60f81b89838301815181106107d357fe5b60200101906001600160f81b031916908160001a9053506001016107a5565b5050600190950194506106eb9350505050565b60606001836000015184602001518486604001518760600151604051602001610833969594939291906110f6565b604051602081830303815290604052905092915050565b61085261090f565b506008908102919091016004810151600682015191909201516040805160608101825263ffffffff9094168452610fff808416600c94851c600f908116600a90810a9290920260208801529184169390941c1690920a029082015290565b600060088251816104c657fe5b606060058460000151856020015186604001518686604051602001610587969594939291906111d3565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b60405180606001604052806000815260200160008152602001600081525090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b600082601f83011261097057600080fd5b813561098361097e826112cb565b6112a4565b915081818352602084019350602081019050838560a08402820111156109a857600080fd5b60005b838110156109d657816109be8882610b02565b84525060209092019160a091909101906001016109ab565b5050505092915050565b600082601f8301126109f157600080fd5b81356109ff61097e826112cb565b91508181835260208401935060208101905083856080840282011115610a2457600080fd5b60005b838110156109d65781610a3a8882610be0565b84525060209092019160809190910190600101610a27565b600082601f830112610a6357600080fd5b6004610a7161097e826112ec565b91508183856020840282011115610a8757600080fd5b60005b838110156109d65781610a9d8882610c4f565b8452506020928301929190910190600101610a8a565b600082601f830112610ac457600080fd5b8135610ad261097e8261130a565b91508082526020830160208301858383011115610aee57600080fd5b610af983828461136e565b50505092915050565b600060a08284031215610b1457600080fd5b610b1e60a06112a4565b90506000610b2c8484610c4f565b8252506020610b3d84848301610c4f565b6020830152506040610b5184828501610c4f565b6040830152506060610b6584828501610c4f565b6060830152506080610b7984828501610c4f565b60808301525092915050565b600060608284031215610b9757600080fd5b610ba160606112a4565b90506000610baf8484610c4f565b8252506020610bc084848301610c4f565b6020830152506040610bd484828501610c4f565b60408301525092915050565b600060808284031215610bf257600080fd5b610bfc60806112a4565b90506000610c0a8484610c4f565b8252506020610c1b84848301610c4f565b6020830152506040610c2f84828501610c4f565b6040830152506060610c4384828501610c4f565b60608301525092915050565b803561025b816113e3565b600060208284031215610c6c57600080fd5b813567ffffffffffffffff811115610c8357600080fd5b6102f08482850161095f565b600060208284031215610ca157600080fd5b813567ffffffffffffffff811115610cb857600080fd5b6102f0848285016109e0565b600060208284031215610cd657600080fd5b813567ffffffffffffffff811115610ced57600080fd5b6102f084828501610ab3565b60008060408385031215610d0c57600080fd5b823567ffffffffffffffff811115610d2357600080fd5b610d2f85828601610ab3565b9250506020610d4085828601610c4f565b9150509250929050565b600080600060608486031215610d5f57600080fd5b833567ffffffffffffffff811115610d7657600080fd5b610d8286828701610ab3565b9350506020610d9386828701610c4f565b9250506040610da486828701610c4f565b9150509250925092565b60008060008060e08587031215610dc457600080fd5b843567ffffffffffffffff811115610ddb57600080fd5b610de787828801610ab3565b9450506020610df887828801610c4f565b9350506040610e0987828801610c4f565b9250506060610e1a87828801610a52565b91505092959194509250565b600080600060a08486031215610e3b57600080fd5b6000610e478686610b85565b9350506060610e5886828701610c4f565b9250506080610da486828701610c4f565b600060208284031215610e7b57600080fd5b60006102f08484610c4f565b6000610e938383611050565b505060200190565b610ea481611335565b610eae8184611345565b9250610eb982611332565b8060005b83811015610ee7578151610ed18782610e87565b9650610edc8361133f565b925050600101610ebd565b505050505050565b610ef881611353565b82525050565b6000610f098261133b565b610f13818561134a565b9350610f2381856020860161137a565b610f2c816113c7565b9093019392505050565b6000610f4360098361134a565b68109859081a5b9c1d5d60ba1b815260200192915050565b805160a0830190610f6c8482611050565b506020820151610f7f6020850182611050565b506040820151610f926040850182611050565b506060820151610fa56060850182611050565b506080820151610fb86080850182611050565b50505050565b80516060830190610fcf8482611050565b506020820151610fe26020850182611050565b506040820151610fb86040850182611050565b805160808301906110068482611050565b5060208201516110196020850182611050565b50604082015161102c6040850182611050565b506060820151610fb86060850182611050565b610ef861104b82611358565b6113a6565b610ef881611332565b610ef861106582611332565b611332565b610ef86110768261135f565b6113b1565b610ef861108782611368565b6113bc565b60006110988289611059565b6020820191506110a88288611059565b6020820191506110b88287610e9b565b6080820191506110c88286611059565b6020820191506110d88285611059565b6020820191506110e88284611059565b506020019695505050505050565b60006111028289611059565b6020820191506111128288611059565b6020820191506111228287611059565b6020820191506110c88286611059565b600061113e828761106a565b60048201915061114e828661106a565b60048201915061115e828561103f565b60028201915061116e828461103f565b50600201949350505050565b6000611186828861106a565b600482019150611196828761106a565b6004820191506111a6828661106a565b6004820191506111b6828561103f565b6002820191506111c6828461103f565b5060020195945050505050565b60006111df828961107b565b6001820191506111ef828861106a565b6004820191506111ff8287611059565b60208201915061120f8286611059565b60208201915061121f828561106a565b60048201915061122f828461106a565b506004019695505050505050565b6020810161025b8284610eef565b602080825281016102be8184610efe565b6020808252810161025b81610f36565b60a0810161025b8284610f5b565b6060810161025b8284610fbe565b6080810161025b8284610ff5565b6020810161025b8284611050565b60405181810167ffffffffffffffff811182821017156112c357600080fd5b604052919050565b600067ffffffffffffffff8211156112e257600080fd5b5060209081020190565b600067ffffffffffffffff82111561130357600080fd5b5060200290565b600067ffffffffffffffff82111561132157600080fd5b506020601f91909101601f19160190565b90565b50600490565b5190565b60200190565b919050565b90815260200190565b151590565b61ffff1690565b63ffffffff1690565b60ff1690565b82818337506000910152565b60005b8381101561139557818101518382015260200161137d565b83811115610fb85750506000910152565b600061025b826113d7565b600061025b826113d1565b600061025b826113dd565b601f01601f191690565b60e01b90565b60f01b90565b60f81b90565b6113ec81611332565b81146113f757600080fd5b5056fea365627a7a72315820dc2a1e1246aaeeb7ff0f0574dcbcd4fe11c564579f50d5888187a5decf0b7dd86c6578706572696d656e74616cf564736f6c634300050f0040";
