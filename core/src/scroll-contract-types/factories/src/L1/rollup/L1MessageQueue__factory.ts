/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  L1MessageQueue,
  L1MessageQueueInterface,
} from "../../../../src/L1/rollup/L1MessageQueue";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_messenger",
        type: "address",
      },
      {
        internalType: "address",
        name: "_scrollChain",
        type: "address",
      },
      {
        internalType: "address",
        name: "_enforcedTxGateway",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ErrorZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "startIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "skippedBitmap",
        type: "uint256",
      },
    ],
    name: "DequeueTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "DropTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "queueIndex",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_oldGasOracle",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newGasOracle",
        type: "address",
      },
    ],
    name: "UpdateGasOracle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_oldMaxGasLimit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newMaxGasLimit",
        type: "uint256",
      },
    ],
    name: "UpdateMaxGasLimit",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "appendCrossDomainMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "appendEnforcedTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "calculateIntrinsicGasFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_queueIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "computeTransactionHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "dropCrossDomainMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "enforcedTxGateway",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256",
      },
    ],
    name: "estimateCrossDomainMessageFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gasOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_queueIndex",
        type: "uint256",
      },
    ],
    name: "getCrossDomainMessage",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_messenger",
        type: "address",
      },
      {
        internalType: "address",
        name: "_scrollChain",
        type: "address",
      },
      {
        internalType: "address",
        name: "_enforcedTxGateway",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gasOracle",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxGasLimit",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_queueIndex",
        type: "uint256",
      },
    ],
    name: "isMessageDropped",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_queueIndex",
        type: "uint256",
      },
    ],
    name: "isMessageSkipped",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "messageQueue",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "messenger",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextCrossDomainMessageIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingQueueIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_startIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_skippedBitmap",
        type: "uint256",
      },
    ],
    name: "popCrossDomainMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "scrollChain",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newGasOracle",
        type: "address",
      },
    ],
    name: "updateGasOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newMaxGasLimit",
        type: "uint256",
      },
    ],
    name: "updateMaxGasLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620017983803806200179883398101604081905262000034916200018a565b6001600160a01b03831615806200005257506001600160a01b038216155b806200006557506001600160a01b038116155b15620000845760405163a7f9319d60e01b815260040160405180910390fd5b6200008e620000ac565b6001600160a01b0392831660805290821660a0521660c052620001d4565b600054610100900460ff1615620001195760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116146200016b576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b80516001600160a01b03811681146200018557600080fd5b919050565b600080600060608486031215620001a057600080fd5b620001ab846200016d565b9250620001bb602085016200016d565b9150620001cb604085016200016d565b90509250925092565b60805160a05160c05161157862000220600039600081816101ea0152610a9801526000818161028301526103e00152600081816101880152818161083201526109f101526115786000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80638da5cb5b116100c3578063d5ad4a971161007c578063d5ad4a971461030b578063d7704bae1461031e578063e172d3a114610331578063f2fde38b14610344578063f7013ef614610357578063fd0ad31e1461036a57600080fd5b80638da5cb5b146102a557806391652461146102b65780639b159782146102c9578063a85006ca146102dc578063ae453cd5146102e5578063bdc6f0a0146102f857600080fd5b80635d62a8dd116101155780635d62a8dd146102345780635e45da231461024757806370cee67f14610250578063715018a6146102635780637d82191a1461026b578063897630dd1461027e57600080fd5b806329aa604b1461015d5780633cb747bf146101835780633e6dada1146101c25780633e83496c146101e557806355f613ce1461020c5780635ad9945a14610221575b600080fd5b61017061016b366004611158565b610372565b6040519081526020015b60405180910390f35b6101aa7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161017a565b6101d56101d0366004611158565b610393565b604051901515815260200161017a565b6101aa7f000000000000000000000000000000000000000000000000000000000000000081565b61021f61021a366004611171565b6103dd565b005b61017061022f3660046111fd565b610596565b6068546101aa906001600160a01b031681565b610170606b5481565b61021f61025e36600461127f565b61078b565b61021f6107e5565b6101d5610279366004611158565b6107f9565b6101aa7f000000000000000000000000000000000000000000000000000000000000000081565b6033546001600160a01b03166101aa565b61021f6102c4366004611158565b61082f565b61021f6102d736600461129a565b6109ee565b610170606a5481565b6101706102f3366004611158565b610a6e565b61021f6103063660046112f4565b610a95565b61021f610319366004611158565b610b80565b61017061032c366004611158565b610bcd565b61017061033f36600461136c565b610c5a565b61021f61035236600461127f565b610cef565b61021f6103653660046113ae565b610d68565b606954610170565b6069818154811061038257600080fd5b600091825260209091200154905081565b600881901c6000908152606d6020526040812054600160ff84161b16151580156103d75750600882901c6000908152606c6020526040902054600160ff84161b1615155b92915050565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461045a5760405162461bcd60e51b815260206004820181905260248201527f4f6e6c792063616c6c61626c6520627920746865205363726f6c6c436861696e60448201526064015b60405180910390fd5b6101008211156104a45760405162461bcd60e51b8152602060048201526015602482015274706f7020746f6f206d616e79206d6573736167657360581b6044820152606401610451565b82606a54146104ec5760405162461bcd60e51b81526020600482015260146024820152730e6e8c2e4e840d2dcc8caf040dad2e6dac2e8c6d60631b6044820152606401610451565b600883901c6000818152606d6020526040902080546001851b6000190193841660ff871681811b90921790925590929190610100818601111561054757600182016000908152606d6020526040902061010082900385901c90555b505050818301606a5560408051848152602081018490529081018290527fc77f792f838ae38399ac31acc3348389aeb110ce7bedf3cfdbdd5e66792679709060600160405180910390a1505050565b6000607e81610642565b6000816105af57506001919050565b5b81156105c55760089190911c906001016105b0565b919050565b806080831060018114610602576105e0846105a0565b60808101835360018301925084816020036008021b8352808301925050610623565b84841516600181146106165784835361061b565b608083535b506001820191505b509392505050565b806094815360609290921b60018301525060150190565b6005604051018061065560018c836105ca565b9050610663600189836105ca565b905061066f898261062b565b905061067d60018b836105ca565b905060018614600181146106e55760388710600181146106ca576106a0886105a0565b8060b701845360018401935088816020036008021b845280840193505087898437918701916106df565b87608001835360018301925087898437918701915b506106f8565b6106f56000893560001a846105ca565b91505b506107038c8261062b565b9050818103600080603883106001811461073757610720846105a0565b60f78101600882021b851793506001019150610742565b8360c0019250600191505b5086816008021b821791506001810190508060080292508451831c8284610100031b17915080850394505080845250508181038220925050508092505050979650505050505050565b610793610ecc565b606880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f9ed5ec28f252b3e7f62f1ace8e54c5ebabf4c61cc2a7c33a806365b2ff7ecc5e90600090a35050565b6107ed610ecc565b6107f76000610f26565b565b6000606a54821061080c57506000919050565b600882901c6000908152606d6020526040902054600160ff84161b1615156103d7565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316146108775760405162461bcd60e51b81526004016104519061140a565b606a5481106108c85760405162461bcd60e51b815260206004820152601b60248201527f63616e6e6f742064726f702070656e64696e67206d65737361676500000000006044820152606401610451565b600881901c6000908152606d6020526040902054600160ff83161b166109305760405162461bcd60e51b815260206004820152601860248201527f64726f70206e6f6e2d736b6970706564206d65737361676500000000000000006044820152606401610451565b600881901c6000908152606c6020526040902054600160ff83161b16156109995760405162461bcd60e51b815260206004820152601760248201527f6d65737361676520616c72656164792064726f707065640000000000000000006044820152606401610451565b600881901c6000908152606c602052604090208054600160ff84161b1790556040518181527f43a375005206d20a83abc71722cba68c24434a8dc1f583775be7c3fde0396cbf9060200160405180910390a150565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614610a365760405162461bcd60e51b81526004016104519061140a565b610a41838383610f78565b3373111100000000000000000000000000000000111101610a6781866000878787611058565b5050505050565b600060698281548110610a8357610a83611450565b90600052602060002001549050919050565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614610b1c5760405162461bcd60e51b815260206004820152602660248201527f4f6e6c792063616c6c61626c652062792074686520456e666f7263656454784760448201526561746577617960d01b6064820152608401610451565b6001600160a01b0386163b15610b5f5760405162461bcd60e51b81526020600482015260086024820152676f6e6c7920454f4160c01b6044820152606401610451565b610b6a838383610f78565b610b78868686868686611058565b505050505050565b610b88610ecc565b606b80549082905560408051828152602081018490527fa030881e03ff723954dd0d35500564afab9603555d09d4456a32436f2b2373c5910160405180910390a15050565b6068546000906001600160a01b031680610bea5750600092915050565b604051636bb825d760e11b8152600481018490526001600160a01b0382169063d7704bae90602401602060405180830381865afa158015610c2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c539190611466565b9392505050565b6068546000906001600160a01b031680610c785760009150506103d7565b60405163e172d3a160e01b81526001600160a01b0382169063e172d3a190610ca690879087906004016114a8565b602060405180830381865afa158015610cc3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce79190611466565b949350505050565b610cf7610ecc565b6001600160a01b038116610d5c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610451565b610d6581610f26565b50565b600054610100900460ff1615808015610d885750600054600160ff909116105b80610da25750303b158015610da2575060005460ff166001145b610e055760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610451565b6000805460ff191660011790558015610e28576000805461ff0019166101001790555b610e306110fe565b606880546001600160a01b038086166001600160a01b031992831617909255606b849055606580548984169083161790556066805488841690831617905560678054928716929091169190911790558015610b78576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050505050565b6033546001600160a01b031633146107f75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610451565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b606b54831115610fd85760405162461bcd60e51b815260206004820152602560248201527f476173206c696d6974206d757374206e6f7420657863656564206d6178476173604482015264131a5b5a5d60da1b6064820152608401610451565b6000610fe48383610c5a565b9050808410156110525760405162461bcd60e51b815260206004820152603360248201527f496e73756666696369656e7420676173206c696d69742c206d7573742062652060448201527261626f766520696e7472696e7369632067617360681b6064820152608401610451565b50505050565b606954600061106c8883888a898989610596565b606980546001810182556000919091527f7fb4302e8e91f9110a6554c2c0a24601252c2a42c2220ca988efcfe399914308018190556040519091506001600160a01b0380891691908a16907f69cfcb8e6d4192b8aba9902243912587f37e550d75c1fa801491fce26717f37e906110ec908a9087908b908b908b906114bc565b60405180910390a35050505050505050565b600054610100900460ff166111255760405162461bcd60e51b8152600401610451906114f7565b6107f7600054610100900460ff1661114f5760405162461bcd60e51b8152600401610451906114f7565b6107f733610f26565b60006020828403121561116a57600080fd5b5035919050565b60008060006060848603121561118657600080fd5b505081359360208301359350604090920135919050565b80356001600160a01b03811681146105c557600080fd5b60008083601f8401126111c657600080fd5b50813567ffffffffffffffff8111156111de57600080fd5b6020830191508360208285010111156111f657600080fd5b9250929050565b600080600080600080600060c0888a03121561121857600080fd5b6112218861119d565b9650602088013595506040880135945061123d6060890161119d565b93506080880135925060a088013567ffffffffffffffff81111561126057600080fd5b61126c8a828b016111b4565b989b979a50959850939692959293505050565b60006020828403121561129157600080fd5b610c538261119d565b600080600080606085870312156112b057600080fd5b6112b98561119d565b935060208501359250604085013567ffffffffffffffff8111156112dc57600080fd5b6112e8878288016111b4565b95989497509550505050565b60008060008060008060a0878903121561130d57600080fd5b6113168761119d565b95506113246020880161119d565b94506040870135935060608701359250608087013567ffffffffffffffff81111561134e57600080fd5b61135a89828a016111b4565b979a9699509497509295939492505050565b6000806020838503121561137f57600080fd5b823567ffffffffffffffff81111561139657600080fd5b6113a2858286016111b4565b90969095509350505050565b600080600080600060a086880312156113c657600080fd5b6113cf8661119d565b94506113dd6020870161119d565b93506113eb6040870161119d565b92506113f96060870161119d565b949793965091946080013592915050565b60208082526026908201527f4f6e6c792063616c6c61626c6520627920746865204c315363726f6c6c4d657360408201526539b2b733b2b960d11b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561147857600080fd5b5051919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b602081526000610ce760208301848661147f565b85815267ffffffffffffffff851660208201528360408201526080606082015260006114ec60808301848661147f565b979650505050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea2646970667358221220995fee0111ad4cf4c1b38a71f006e334d44f1ad5dce231078d972691b906939964736f6c63430008100033";

type L1MessageQueueConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: L1MessageQueueConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class L1MessageQueue__factory extends ContractFactory {
  constructor(...args: L1MessageQueueConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _messenger: AddressLike,
    _scrollChain: AddressLike,
    _enforcedTxGateway: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _messenger,
      _scrollChain,
      _enforcedTxGateway,
      overrides || {}
    );
  }
  override deploy(
    _messenger: AddressLike,
    _scrollChain: AddressLike,
    _enforcedTxGateway: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _messenger,
      _scrollChain,
      _enforcedTxGateway,
      overrides || {}
    ) as Promise<
      L1MessageQueue & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): L1MessageQueue__factory {
    return super.connect(runner) as L1MessageQueue__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L1MessageQueueInterface {
    return new Interface(_abi) as L1MessageQueueInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): L1MessageQueue {
    return new Contract(address, _abi, runner) as unknown as L1MessageQueue;
  }
}