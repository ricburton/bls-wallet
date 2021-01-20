/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import {TestMassMigration} from "./TestMassMigration";

export class TestMassMigrationFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestMassMigration> {
    return super.deploy(overrides || {}) as Promise<TestMassMigration>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestMassMigration {
    return super.attach(address) as TestMassMigration;
  }
  connect(signer: Signer): TestMassMigrationFactory {
    return super.connect(signer) as TestMassMigrationFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestMassMigration {
    return new Contract(address, _abi, signerOrProvider) as TestMassMigration;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256[2]",
        name: "signature",
        type: "uint256[2]"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "pubkeyID",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "tokenID",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
              }
            ],
            internalType: "struct Types.UserState[]",
            name: "states",
            type: "tuple[]"
          },
          {
            internalType: "bytes32[][]",
            name: "stateWitnesses",
            type: "bytes32[][]"
          },
          {
            internalType: "uint256[4][]",
            name: "pubkeys",
            type: "uint256[4][]"
          },
          {
            internalType: "bytes32[][]",
            name: "pubkeyWitnesses",
            type: "bytes32[][]"
          }
        ],
        internalType: "struct Types.SignatureProof",
        name: "proof",
        type: "tuple"
      },
      {
        internalType: "bytes32",
        name: "stateRoot",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "accountRoot",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "spokeID",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "txs",
        type: "bytes"
      }
    ],
    name: "checkSignature",
    outputs: [
      {
        internalType: "enum Types.Result",
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "stateRoot",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "maxTxSize",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "accountRoot",
            type: "bytes32"
          },
          {
            internalType: "uint256[2]",
            name: "signature",
            type: "uint256[2]"
          },
          {
            internalType: "uint256",
            name: "spokeID",
            type: "uint256"
          },
          {
            internalType: "bytes32",
            name: "withdrawRoot",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "tokenID",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "feeReceiver",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "txs",
            type: "bytes"
          }
        ],
        internalType: "struct Types.MassMigrationBody",
        name: "committed",
        type: "tuple"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "pubkeyID",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "tokenID",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
              }
            ],
            internalType: "struct Types.UserState",
            name: "state",
            type: "tuple"
          },
          {
            internalType: "bytes32[]",
            name: "witness",
            type: "bytes32[]"
          }
        ],
        internalType: "struct Types.StateMerkleProof[]",
        name: "proofs",
        type: "tuple[]"
      }
    ],
    name: "processMassMigrationCommit",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "enum Types.Result",
        name: "result",
        type: "uint8"
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
        internalType: "uint256[2]",
        name: "signature",
        type: "uint256[2]"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "pubkeyID",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "tokenID",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
              }
            ],
            internalType: "struct Types.UserState[]",
            name: "states",
            type: "tuple[]"
          },
          {
            internalType: "bytes32[][]",
            name: "stateWitnesses",
            type: "bytes32[][]"
          },
          {
            internalType: "uint256[4][]",
            name: "pubkeys",
            type: "uint256[4][]"
          },
          {
            internalType: "bytes32[][]",
            name: "pubkeyWitnesses",
            type: "bytes32[][]"
          }
        ],
        internalType: "struct Types.SignatureProof",
        name: "proof",
        type: "tuple"
      },
      {
        internalType: "bytes32",
        name: "stateRoot",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "accountRoot",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "spokeID",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "txs",
        type: "bytes"
      }
    ],
    name: "testCheckSignature",
    outputs: [
      {
        internalType: "uint256",
        name: "gasCost",
        type: "uint256"
      },
      {
        internalType: "enum Types.Result",
        name: "result",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "stateRoot",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "maxTxSize",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "accountRoot",
            type: "bytes32"
          },
          {
            internalType: "uint256[2]",
            name: "signature",
            type: "uint256[2]"
          },
          {
            internalType: "uint256",
            name: "spokeID",
            type: "uint256"
          },
          {
            internalType: "bytes32",
            name: "withdrawRoot",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "tokenID",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "feeReceiver",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "txs",
            type: "bytes"
          }
        ],
        internalType: "struct Types.MassMigrationBody",
        name: "commitmentBody",
        type: "tuple"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "pubkeyID",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "tokenID",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
              }
            ],
            internalType: "struct Types.UserState",
            name: "state",
            type: "tuple"
          },
          {
            internalType: "bytes32[]",
            name: "witness",
            type: "bytes32[]"
          }
        ],
        internalType: "struct Types.StateMerkleProof[]",
        name: "proofs",
        type: "tuple[]"
      }
    ],
    name: "testProcessMassMigrationCommit",
    outputs: [
      {
        internalType: "uint256",
        name: "gasCost",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "enum Types.Result",
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506137a1806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063285fa8b714610051578063719871bf1461007b578063997ee2381461009d578063ab5a164f146100bd575b600080fd5b61006461005f366004612e2d565b6100d0565b6040516100729291906134c9565b60405180910390f35b61008e610089366004612f16565b6100f8565b604051610072939291906135c3565b6100b06100ab366004612e2d565b610128565b60405161007291906134e4565b6100646100cb366004612f16565b610147565b6000805a91506100e589898989898989610128565b90505a8203915097509795505050505050565b60008060005a925060008061010f89898989610147565b915091505a9094039390925090505b9450945094915050565b600061013988888888888888610323565b90505b979650505050505050565b6000806101578460e00151610571565b156101675750849050600861031a565b60006101768560e00151610589565b90508581111561018d57866009925092505061031a565b610195612763565b60408051602080820183526000808352835186815286830281019092019093528291906060908680156101d2578160200160208202803883390190505b50905060005b8681101561027e5760e08b01516101f5908263ffffffff61059d16565b955061021a8d878d608001518d858151811061020d57fe5b6020026020010151610605565b919e509098509250600088600a81111561023057fe5b1461024557508b975061031a95505050505050565b856020015185019450856040015184019350828051906020012082828151811061026b57fe5b60209081029190910101526001016101d8565b506102a78c8b60c001518c60800151868d8b8151811061029a57fe5b6020026020010151610677565b909c509650600087600a8111156102ba57fe5b146102ce57508a965061031a945050505050565b8960a0015184146102eb578b60069750975050505050505061031a565b89606001516102f982610728565b14610310578b60079750975050505050505061031a565b508a965050505050505b94509492505050565b60008061032f83610589565b905060608160405190808252806020026020018201604052801561036d57816020015b61035a612784565b8152602001906001900390816103525790505b50905060005b8281101561052457610383612763565b610393868363ffffffff61059d16565b90506103e28a6103b98d6000015185815181106103ac57fe5b6020026020010151610984565b8051906020012083600001518e6020015186815181106103d557fe5b60200260200101516109c3565b6104075760405162461bcd60e51b81526004016103fe90613513565b60405180910390fd5b610475898c60400151848151811061041b57fe5b602002602001015160405160200161043391906133db565b604051602081830303815290604052805190602001208d60000151858151811061045957fe5b6020026020010151600001518e6060015186815181106103d557fe5b6104915760405162461bcd60e51b81526004016103fe90613593565b60008b6000015183815181106104a357fe5b602002602001015160600151116104cc5760405162461bcd60e51b81526004016103fe90613553565b60606104f78260018e6000015186815181106104e457fe5b602002602001015160600151038a6109dd565b90506105038982610a20565b84848151811061050f57fe5b60209081029190910101525050600101610373565b506000806105378c8c6040015185610adf565b925090508161054d57600a94505050505061013c565b8061055f57600594505050505061013c565b5060009b9a5050505050505050505050565b6000600882518161057e57fe5b06151590505b919050565b6000600882518161059657fe5b0492915050565b6105a5612763565b50600881810283016004810151600682015191909201516040805160608101825263ffffffff9094168452610fff808416600c94851c600f908116600a90810a9290920260208801529184169390941c1690920a02908201525b92915050565b6000606060006106258787600001518789602001518a6040015189610e7c565b9093509050600081600a81111561063857fe5b1461065357604080516020810190915260008152915061011e565b835151602087015161066791908790610f2f565b9150600090509450945094915050565b60008061069d8761068b8560000151610984565b805190602001208886602001516109c3565b6106b95760405162461bcd60e51b81526004016103fe906135b3565b6106c16127a2565b60006106d287878760000151610f6f565b9092509050600081600a8111156106e557fe5b146106f75760009350915061071e9050565b61071561070383610984565b80519060200120898760200151610fe0565b93506000925050505b9550959350505050565b600060208251111561074c5760405162461bcd60e51b81526004016103fe90613543565b6107546127ca565b7f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56381527f633dc4d7da7256660a892f8f1604a44b5432649cc8ec5cb3ced4c4e6ac94dd1d60208201527f890740a8eb06ce9be422cb8da5cdafc2b58c0a5e24036c578de2a433c828ff7d60408201527f3b8ec09e026fdc305365dfc94e189a81b38c7597b3d941c279f042e8206e0bd860608201527fecd50eee38e386bd62be9bedb990706951b65fe053bd9d8a521af753d139e2da60808201527fdefff6d330bb5403f63b14f33b578274160de3a50df4efecf0e0db73bcdd3da560a082015282516001818116918101901c60005b60005b8383038110156108cc576000600182901b905087818151811061086657fe5b602002602001015188826001018151811061087d57fe5b60200260200101516040516020016108969291906134ae565b604051602081830303815290604052805190602001208883815181106108b857fe5b602090810291909101015250600101610847565b83600114156109415786600182901b815181106108e557fe5b60200260200101518583600681106108f957fe5b602002015160001b6040516020016109129291906134ae565b6040516020818303038152906040528051906020012087828151811061093457fe5b6020026020010181815250505b82600114156109505750610964565b5060018083169350918201821c9101610844565b8560008151811061097157fe5b6020026020010151945050505050919050565b606081600001518260200151836040015184606001516040516020016109ad94939291906133fc565b6040516020818303038152906040529050919050565b6000846109d1858585610fe0565b1490505b949350505050565b606060058460000151856020015186604001518686604051602001610a0796959493929190613444565b60405160208183030381529060405290505b9392505050565b610a28612784565b610a30612784565b610a3a848461108b565b9050610a44612784565b610a558260005b6020020151611160565b9050610a5f612784565b610a6a836001610a4b565b9050610a746127e8565b825181526020808401518282015282516040808401919091529083015160608301526000908460808460066107d05a03fa9050808015610ab357610ab5565bfe5b5080610ad35760405162461bcd60e51b81526004016103fe90613503565b50919695505050505050565b8151600090819080610b035760405162461bcd60e51b81526004016103fe90613573565b83518114610b235760405162461bcd60e51b81526004016103fe90613533565b6000816001016006029050606081604051908082528060200260200182016040528015610b5a578160200160208202803883390190505b509050876000602002015181600081518110610b7257fe5b6020908102919091010152876001602002015181600181518110610b9257fe5b6020026020010181815250507f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281600281518110610bcc57fe5b6020026020010181815250507f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed81600381518110610c0657fe5b6020026020010181815250507f275dc4a288d1afb3cbb1ac09187524c7db36395df7be3b99e673b13a075a65ec81600481518110610c4057fe5b6020026020010181815250507f1d9befcd05a5323e6da4d435f3b617cdb3af83285c2df711ef39c01571827f9d81600581518110610c7a57fe5b602090810291909101015260005b83811015610e2957868181518110610c9c57fe5b6020026020010151600060028110610cb057fe5b6020020151828260060260060181518110610cc757fe5b602002602001018181525050868181518110610cdf57fe5b6020026020010151600160028110610cf357fe5b6020020151828260060260070181518110610d0a57fe5b602002602001018181525050878181518110610d2257fe5b6020026020010151600160048110610d3657fe5b6020020151828260060260080181518110610d4d57fe5b602002602001018181525050878181518110610d6557fe5b6020026020010151600060048110610d7957fe5b6020020151828260060260090181518110610d9057fe5b602002602001018181525050878181518110610da857fe5b6020026020010151600360048110610dbc57fe5b60200201518282600602600a0181518110610dd357fe5b602002602001018181525050878181518110610deb57fe5b6020026020010151600260048110610dff57fe5b60200201518282600602600b0181518110610e1657fe5b6020908102919091010152600101610c88565b50610e32612806565b6000610e3d856114dc565b90506020826020860260208601600885fa955085610e6657600080965096505050505050610e74565b505115159450600193505050505b935093915050565b600080610ea288610e908560000151610984565b805190602001208986602001516109c3565b610ebe5760405162461bcd60e51b81526004016103fe90613563565b610ec66127a2565b6000610ed888888888600001516114ed565b9092509050600081600a811115610eeb57fe5b14610efd57600093509150610f249050565b610f1b610f0983610984565b805190602001208a8760200151610fe0565b93506000925050505b965096945050505050565b6060610f396127a2565b604051806080016040528086815260200185815260200184815260200160008152509050610f6681610984565b95945050505050565b610f776127a2565b600084836020015114610f8f57508190506004610e74565b60405180608001604052808460000151815260200184602001518152602001610fc58686604001516115b890919063ffffffff16565b81526060850151602090910152915060009050935093915050565b600083815b835181101561108257600185821c1661103b578184828151811061100557fe5b602002602001015160405160200161101e9291906134ae565b60405160208183030381529060405280519060200120915061107a565b83818151811061104757fe5b6020026020010151826040516020016110619291906134ae565b6040516020818303038152906040528051906020012091505b600101610fe5565b50949350505050565b611093612784565b606061109f84846115dd565b9050600080600080601885016001600160c01b0381511693506030860190506001600160c01b03815116945060008051602061373f8339815191528560008051602061373f833981519152600160c01b87090892506048860190506001600160c01b0381511693506060860190506001600160c01b03815116945060008051602061373f8339815191528560008051602061373f833981519152600160c01b8709086040805180820190915293845260208401525090979650505050505050565b611168612784565b60008051602061373f83398151915282106111955760405162461bcd60e51b81526004016103fe90613583565b8160006111a182611845565b915050600060008051602061373f833981519152806111bc57fe5b838409905060008051602061373f833981519152600482089050600060008051602061373f83398151915277b3c4d79d41a91759a9e4c7e359b6b89eaec68e62effffffd85099050600060008051602061373f83398151915283830990506112238161186e565b905060008051602061373f833981519152828309915060008051602061373f833981519152818309915060008051602061373f833981519152828609915060008051602061373f8339815191528260008051602061373f833981519152037759e26bcea0d48bacd4f263f1acdb5c4f5763473177fffffe08945060008051602061373f833981519152858609915060008051602061373f833981519152858309915060008051602061373f83398151915260038308915060006112e583611845565b909350905080156113285784611309578260008051602061373f8339815191520392505b5050604080518082019091529384526020840152509091506105849050565b60008051602061373f8339815191526001870860008051602061373f83398151915203955060008051602061373f8339815191528061136357fe5b868709925060008051602061373f833981519152868409925060008051602061373f83398151915260038408925061139a83611845565b909350905080156113d957846113095750506040805180820190915293845260008051602061373f833981519152036020840152509091506105849050565b60008051602061373f833981519152848509955060008051602061373f833981519152868709955060008051602061373f833981519152828709955060008051602061373f833981519152828709955060008051602061373f83398151915260018708955060008051602061373f833981519152868709925060008051602061373f833981519152868409925060008051602061373f83398151915260038408925061148483611845565b9093509050806114a65760405162461bcd60e51b81526004016103fe906135a3565b846114bf578260008051602061373f8339815191520392505b505060408051808201909152938452602084015250909392505050565b600181016184d00261afc801919050565b6114f56127a2565b6000846115075750819050600161031a565b6000611519868663ffffffff6115b816565b9050808460400151101561153457836002925092505061031a565b8684602001511461154c57836003925092505061031a565b6115546127a2565b6040518060800160405280866000015181526020018660200151815260200161158a84886040015161187990919063ffffffff16565b81526020016115a7600188606001516115b890919063ffffffff16565b905298600098509650505050505050565b600082820183811015610a195760405162461bcd60e51b81526004016103fe90613523565b80516040805160648301808252601f1960838501168201602001909252606092918391908015611614576020820181803883390190505b506040805160608082526080820190925291925090816020820181803883390190505090506060820160005b8481101561165a5760208188018101518383015201611640565b508301600081536001016060815360010160008153600181018790526021016020815350600060028360405161169091906133f0565b602060405180830381855afa1580156116ad573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052506116d09190810190612ef8565b905060006042945084845281602085015260016040850153604184018890526020606185015360028460405161170691906133f0565b602060405180830381855afa158015611723573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052506117469190810190612ef8565b90508060208401528082188060208601526002604086015360418501899052602060618601535060028460405161177d91906133f0565b602060405180830381855afa15801561179a573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052506117bd9190810190612ef8565b9050806040840152808218806020860152600360408601536041850189905260206061860153506002846040516117f491906133f0565b602060405180830381855afa158015611811573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052506118349190810190612ef8565b606084015250909695505050505050565b600080611851836118bb565b91508260008051602061373f833981519152838409149050915091565b60006105ff82611ff0565b6000610a1983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612737565b600060008051602061373f8339815191528083840991508083830981838209828283098385830984848309858484098684850997508684840987858409945087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a099a9950505050505050505050565b600060008051602061373f8339815191528083840991508083830981838209828283098385830984848309858484098684850997508684840987858409945087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a099a9950505050505050505050565b6000818484111561275b5760405162461bcd60e51b81526004016103fe91906134f2565b505050900390565b60405180606001604052806000815260200160008152602001600081525090565b60405180604001604052806002906020820280388339509192915050565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b6040518060c001604052806006906020820280388339509192915050565b60405180608001604052806004906020820280388339509192915050565b60405180602001604052806001906020820280388339509192915050565b600082601f83011261283557600080fd5b813561284861284382613611565b6135eb565b81815260209384019390925082018360005b8381101561288657813586016128708882612902565b845250602092830192919091019060010161285a565b5050505092915050565b600082601f8301126128a157600080fd5b81356128af61284382613611565b915081818352602084019350602081019050838560808402820111156128d457600080fd5b60005b8381101561288657816128ea8882612b03565b845250602090920191608091909101906001016128d7565b600082601f83011261291357600080fd5b813561292161284382613611565b9150818183526020840193506020810190508385602084028201111561294657600080fd5b60005b83811015612886578161295c8882612b64565b8452506020928301929190910190600101612949565b600082601f83011261298357600080fd5b813561299161284382613611565b81815260209384019390925082018360005b8381101561288657813586016129b98882612d6c565b84525060209283019291909101906001016129a3565b600082601f8301126129e057600080fd5b81356129ee61284382613611565b91508181835260208401935060208101905083856080840282011115612a1357600080fd5b60005b838110156128865781612a298882612dca565b84525060209092019160809190910190600101612a16565b600082601f830112612a5257600080fd5b6002612a6061284382613631565b91508183856020840282011115612a7657600080fd5b60005b838110156128865781612a8c8882612b64565b8452506020928301929190910190600101612a79565b600082601f830112612ab357600080fd5b6002612ac161284382613631565b91508183856020840282011115612ad757600080fd5b60005b838110156128865781612aed8882612b64565b8452506020928301929190910190600101612ada565b600082601f830112612b1457600080fd5b6004612b2261284382613631565b91508183856020840282011115612b3857600080fd5b60005b838110156128865781612b4e8882612b64565b8452506020928301929190910190600101612b3b565b80356105ff8161372a565b80516105ff8161372a565b600082601f830112612b8b57600080fd5b8135612b996128438261364e565b91508082526020830160208301858383011115612bb557600080fd5b612bc08382846136b5565b50505092915050565b60006101208284031215612bdc57600080fd5b612be76101006135eb565b90506000612bf58484612b64565b8252506020612c0684848301612a41565b6020830152506060612c1a84828501612b64565b6040830152506080612c2e84828501612b64565b60608301525060a0612c4284828501612b64565b60808301525060c0612c5684828501612b64565b60a08301525060e0612c6a84828501612b64565b60c0830152506101008201356001600160401b03811115612c8a57600080fd5b612c9684828501612b7a565b60e08301525092915050565b600060808284031215612cb457600080fd5b612cbe60806135eb565b905081356001600160401b03811115612cd657600080fd5b612ce2848285016129cf565b82525060208201356001600160401b03811115612cfe57600080fd5b612d0a84828501612824565b60208301525060408201356001600160401b03811115612d2957600080fd5b612d3584828501612890565b60408301525060608201356001600160401b03811115612d5457600080fd5b612d6084828501612824565b60608301525092915050565b600060a08284031215612d7e57600080fd5b612d8860406135eb565b90506000612d968484612dca565b82525060808201356001600160401b03811115612db257600080fd5b612dbe84828501612902565b60208301525092915050565b600060808284031215612ddc57600080fd5b612de660806135eb565b90506000612df48484612b64565b8252506020612e0584848301612b64565b6020830152506040612e1984828501612b64565b6040830152506060612d6084828501612b64565b6000806000806000806000610100888a031215612e4957600080fd5b6000612e558a8a612aa2565b97505060408801356001600160401b03811115612e7157600080fd5b612e7d8a828b01612ca2565b9650506060612e8e8a828b01612b64565b9550506080612e9f8a828b01612b64565b94505060a0612eb08a828b01612b64565b93505060c0612ec18a828b01612b64565b92505060e08801356001600160401b03811115612edd57600080fd5b612ee98a828b01612b7a565b91505092959891949750929550565b600060208284031215612f0a57600080fd5b60006109d58484612b6f565b60008060008060808587031215612f2c57600080fd5b6000612f388787612b64565b9450506020612f4987828801612b64565b93505060408501356001600160401b03811115612f6557600080fd5b612f7187828801612bc9565b92505060608501356001600160401b03811115612f8d57600080fd5b612f9987828801612972565b91505092959194509250565b6000612fb1838361300d565b505060200190565b612fc281613678565b612fcc8184610584565b9250612fd782613675565b8060005b83811015613005578151612fef8782612fa5565b9650612ffa83613682565b925050600101612fdb565b505050505050565b61301681613675565b82525050565b60006130278261367e565b6130318185610584565b93506130418185602086016136c1565b9290920192915050565b613016816136aa565b600061305f8261367e565b6130698185613688565b93506130798185602086016136c1565b61308281613707565b9093019392505050565b6000613099601783613688565b7f424c533a20626e206164642063616c6c206661696c6564000000000000000000815260200192915050565b60006130d2602483613688565b7f41757468656e7469636974793a20737461746520696e636c7573696f6e20736981526333b732b960e11b602082015260400192915050565b6000613118601b83613688565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000815260200192915050565b6000613151603583613688565b7f424c533a206e756d626572206f66207075626c6963206b65797320616e64206d815274195cdcd859d95cc81b5d5cdd08189948195c5d585b605a1b602082015260400192915050565b60006131a8601a83613688565b7f4d65726b6c65547265653a20546f6f206d616e79206e6f646573000000000000815260200192915050565b60006131e1601883613688565b7f41757468656e7469636974793a207a65726f206e6f6e63650000000000000000815260200192915050565b600061321a602183613688565b7f5472616e736974696f6e3a2053656e64657220646f6573206e6f7420657869738152601d60fa1b602082015260400192915050565b600061325d602183613688565b7f424c533a206e756d626572206f66207075626c6963206b6579206973207a65728152606f60f81b602082015260400192915050565b60006132a0602383613688565b7f6d6170546f506f696e7446543a20696e76616c6964206669656c6420656c656d815262195b9d60ea1b602082015260400192915050565b60006132e5602583613688565b7f41757468656e7469636974793a206163636f756e7420646f6573206e6f742065815264786973747360d81b602082015260400192915050565b600061332c602283613688565b7f424c533a20626164206674206d617070696e6720696d706c656d656e7461746981526137b760f11b602082015260400192915050565b6000613370602383613688565b7f5472616e736974696f6e3a20726563656976657220646f6573206e6f742065788152621a5cdd60ea1b602082015260400192915050565b6130166133b482613675565b613675565b6130166133c58261369b565b6136f1565b6130166133d6826136a4565b6136fc565b60006133e78284612fb9565b50608001919050565b6000610a19828461301c565b600061340882876133a8565b60208201915061341882866133a8565b60208201915061342882856133a8565b60208201915061343882846133a8565b50602001949350505050565b600061345082896133ca565b60018201915061346082886133b9565b60048201915061347082876133a8565b60208201915061348082866133a8565b60208201915061349082856133b9565b6004820191506134a082846133b9565b506004019695505050505050565b604081016134bc828561300d565b610a19602083018461300d565b604081016134d7828561300d565b610a19602083018461304b565b602081016105ff828461304b565b60208082528101610a198184613054565b602080825281016105ff8161308c565b602080825281016105ff816130c5565b602080825281016105ff8161310b565b602080825281016105ff81613144565b602080825281016105ff8161319b565b602080825281016105ff816131d4565b602080825281016105ff8161320d565b602080825281016105ff81613250565b602080825281016105ff81613293565b602080825281016105ff816132d8565b602080825281016105ff8161331f565b602080825281016105ff81613363565b606081016135d1828661300d565b6135de602083018561300d565b6109d5604083018461304b565b6040518181016001600160401b038111828210171561360957600080fd5b604052919050565b60006001600160401b0382111561362757600080fd5b5060209081020190565b60006001600160401b0382111561364757600080fd5b5060200290565b60006001600160401b0382111561366457600080fd5b506020601f91909101601f19160190565b90565b50600490565b5190565b60200190565b90815260200190565b806105848161371d565b63ffffffff1690565b60ff1690565b60006105ff82613691565b82818337506000910152565b60005b838110156136dc5781810151838201526020016136c4565b838111156136eb576000848401525b50505050565b60006105ff82613711565b60006105ff82613717565b601f01601f191690565b60e01b90565b60f81b90565b600b811061372757fe5b50565b61373381613675565b811461372757600080fdfe30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47a365627a7a72315820e6f3d0d236663004dc47a8a1e460dc2a17934aedb11e2e2e5102ec90e5e84ce46c6578706572696d656e74616cf564736f6c634300050f0040";
