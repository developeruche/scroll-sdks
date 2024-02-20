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
import type { NonPayableOverrides } from "../../../common";
import type {
  L1ScrollMessenger,
  L1ScrollMessengerInterface,
} from "../../../src/L1/L1ScrollMessenger";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_counterpart",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rollup",
        type: "address",
      },
      {
        internalType: "address",
        name: "_messageQueue",
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
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
    ],
    name: "FailedRelayedMessage",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
    ],
    name: "RelayedMessage",
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
        internalType: "uint256",
        name: "messageNonce",
        type: "uint256",
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
        name: "message",
        type: "bytes",
      },
    ],
    name: "SentMessage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_oldFeeVault",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_newFeeVault",
        type: "address",
      },
    ],
    name: "UpdateFeeVault",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldMaxReplayTimes",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMaxReplayTimes",
        type: "uint256",
      },
    ],
    name: "UpdateMaxReplayTimes",
    type: "event",
  },
  {
    inputs: [],
    name: "counterpart",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_messageNonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "dropMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeVault",
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
        name: "_counterpart",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeVault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rollup",
        type: "address",
      },
      {
        internalType: "address",
        name: "_messageQueue",
        type: "address",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "isL1MessageDropped",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "isL2MessageExecuted",
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
    name: "maxReplayTimes",
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
    name: "messageQueue",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "messageSendTimestamp",
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
    name: "paused",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "prevReplayIndex",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "batchIndex",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "merkleProof",
            type: "bytes",
          },
        ],
        internalType: "struct IL1ScrollMessenger.L2MessageProof",
        name: "_proof",
        type: "tuple",
      },
    ],
    name: "relayMessageWithProof",
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
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_messageNonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "uint32",
        name: "_newGasLimit",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_refundAddress",
        type: "address",
      },
    ],
    name: "replayMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "replayStates",
    outputs: [
      {
        internalType: "uint128",
        name: "times",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "lastIndex",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rollup",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_refundAddress",
        type: "address",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setPause",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_newFeeVault",
        type: "address",
      },
    ],
    name: "updateFeeVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newMaxReplayTimes",
        type: "uint256",
      },
    ],
    name: "updateMaxReplayTimes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xDomainMessageSender",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200282c3803806200282c8339810160408190526200003491620001a1565b826001600160a01b0381166200005d5760405163a7f9319d60e01b815260040160405180910390fd5b6001600160a01b03908116608052821615806200008157506001600160a01b038116155b15620000a05760405163a7f9319d60e01b815260040160405180910390fd5b620000aa620000c3565b6001600160a01b0391821660a0521660c05250620001eb565b600054610100900460ff1615620001305760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161462000182576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b80516001600160a01b03811681146200019c57600080fd5b919050565b600080600060608486031215620001b757600080fd5b620001c28462000184565b9250620001d26020850162000184565b9150620001e26040850162000184565b90509250925092565b60805160a05160c0516125bd6200026f600039600081816101fa015281816106900152818161097a01528181610ae901528181610b83015281816111030152818161159c0152818161165101526117cd01526000818161045501528181610f66015261103a0152600081816102f901528181610bb001526117fa01526125bd6000f3fe60806040526004361061014f5760003560e01c8063846d4d7a116100b6578063c311b6fc1161006f578063c311b6fc14610423578063cb23bcb514610443578063e70fc93b14610477578063ea7ec514146104a4578063f2fde38b146104d2578063f8c8765e146104f257600080fd5b8063846d4d7a1461031b5780638da5cb5b1461037d578063946130d81461039b578063b2267a7b146103c0578063b604bf4c146103d3578063bedb86fb1461040357600080fd5b8063550041051161010857806355004105146102745780635c975abb146102875780635f7b15771461029f5780636e296e45146102b2578063715018a6146102d2578063797594b0146102e757600080fd5b8063088681a71461016357806329907acd146101a85780632a6cccb2146101c85780633b70c18a146101e8578063407c195514610234578063478222c21461025457600080fd5b3661015e5761015c610512565b005b600080fd5b34801561016f57600080fd5b5061019361017e366004611e28565b60fc6020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b3480156101b457600080fd5b5061015c6101c3366004611f29565b610573565b3480156101d457600080fd5b5061015c6101e3366004611f9b565b6107cf565b3480156101f457600080fd5b5061021c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161019f565b34801561024057600080fd5b5061015c61024f366004611e28565b610839565b34801561026057600080fd5b5060cb5461021c906001600160a01b031681565b61015c610282366004611fbd565b610880565b34801561029357600080fd5b5060655460ff16610193565b61015c6102ad36600461205b565b610deb565b3480156102be57600080fd5b5060c95461021c906001600160a01b031681565b3480156102de57600080fd5b5061015c610e40565b3480156102f357600080fd5b5061021c7f000000000000000000000000000000000000000000000000000000000000000081565b34801561032757600080fd5b5061035d610336366004611e28565b610101602052600090815260409020546001600160801b0380821691600160801b90041682565b604080516001600160801b0393841681529290911660208301520161019f565b34801561038957600080fd5b506033546001600160a01b031661021c565b3480156103a757600080fd5b506103b26101005481565b60405190815260200161019f565b61015c6103ce366004612101565b610e52565b3480156103df57600080fd5b506101936103ee366004611e28565b60fd6020526000908152604090205460ff1681565b34801561040f57600080fd5b5061015c61041e36600461216e565b610e6d565b34801561042f57600080fd5b5061015c61043e36600461218b565b610e8e565b34801561044f57600080fd5b5061021c7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048357600080fd5b506103b2610492366004611e28565b60fb6020526000908152604090205481565b3480156104b057600080fd5b506103b26104bf366004611e28565b6101026020526000908152604090205481565b3480156104de57600080fd5b5061015c6104ed366004611f9b565b6112f2565b3480156104fe57600080fd5b5061015c61050d36600461225c565b611368565b6033546001600160a01b031633146105715760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b565b61057b6114fa565b60c9546001600160a01b03166001146105a65760405162461bcd60e51b8152600401610568906122b0565b60006105b58686868686611540565b9050600081805190602001209050600060fb600083815260200190815260200160002054116105f65760405162461bcd60e51b8152600401610568906122e7565b600081815260fd602052604090205460ff161561064f5760405162461bcd60e51b815260206004820152601760248201527613595cdcd859d948185b1c9958591e48191c9bdc1c1959604a1b6044820152606401610568565b60008181526101016020526040812054600160801b90046001600160801b03169081900361067a5750835b604051639165246160e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690639165246190602401600060405180830381600087803b1580156106dc57600080fd5b505af11580156106f0573d6000803e3d6000fd5b50505060009182525061010260205260409020548015610713576000190161067a565b600082815260fd602052604090819020805460ff1916600117905560c980546001600160a01b031916736f297c61b5c92ef107ffd30cd56affe5a273e841179055516314298c5160e01b81526001600160a01b038916906314298c5190889061078090889060040161237d565b6000604051808303818588803b15801561079957600080fd5b505af11580156107ad573d6000803e3d6000fd5b505060c980546001600160a01b03191660011790555050505050505050505050565b6107d7610512565b60cb80546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f4aadc32827849f797733838c61302f7f56d2b6db28caa175eb3f7f8e5aba25f591015b60405180910390a15050565b610841610512565b61010080549082905560408051828152602081018490527fd700562df02eb66951f6f5275df7ebd7c0ec58b3422915789b3b1877aab2e52b910161082d565b6108886114fa565b60c9546001600160a01b03166001146108b35760405162461bcd60e51b8152600401610568906122b0565b60006108c28888888888611540565b9050600081805190602001209050600060fb600083815260200190815260200160002054116109035760405162461bcd60e51b8152600401610568906122e7565b600081815260fd602052604090205460ff161561095c5760405162461bcd60e51b815260206004820152601760248201527613595cdcd859d948185b1c9958591e48191c9bdc1c1959604a1b6044820152606401610568565b604051636bb825d760e11b815263ffffffff851660048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063d7704bae90602401602060405180830381865afa1580156109c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ed9190612390565b905080341015610a3f5760405162461bcd60e51b815260206004820152601e60248201527f496e73756666696369656e74206d73672e76616c756520666f722066656500006044820152606401610568565b8015610ae55760cb546040516000916001600160a01b03169083908381818185875af1925050503d8060008114610a92576040519150601f19603f3d011682016040523d82523d6000602084013e610a97565b606091505b5050905080610ae35760405162461bcd60e51b81526020600482015260186024820152774661696c656420746f20646564756374207468652066656560401b6044820152606401610568565b505b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fd0ad31e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b699190612390565b604051634d8acbc160e11b81529091506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690639b15978290610bdc907f0000000000000000000000000000000000000000000000000000000000000000908a9089906004016123a9565b600060405180830381600087803b158015610bf657600080fd5b505af1158015610c0a573d6000803e3d6000fd5b5050506000848152610101602090815260408083208151808301909252546001600160801b038082168352600160801b9091041691810182905292509003610c665760008281526101026020526040902060018a019055610c90565b80602001516001016001600160801b03166101026000848152602001908152602001600020819055505b6001600160801b03808316602083015261010054825190911610610cf65760405162461bcd60e51b815260206004820152601b60248201527f457863656564206d6178696d756d207265706c61792074696d657300000000006044820152606401610568565b80516001600160801b03600191909101811682526000858152610101602090815260409091208351918401518316600160801b029190921617905534838103908414610ddc576000876001600160a01b03168260405160006040518083038185875af1925050503d8060008114610d89576040519150601f19603f3d011682016040523d82523d6000602084013e610d8e565b606091505b5050905080610dda5760405162461bcd60e51b81526020600482015260186024820152774661696c656420746f20726566756e64207468652066656560401b6044820152606401610568565b505b50505050505050505050505050565b610df36114fa565b610e38868686868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508892508791506115909050565b505050505050565b610e48610512565b61057160006119db565b610e5a6114fa565b610e678484848433611590565b50505050565b610e75610512565b8015610e8657610e83611a2d565b50565b610e83611a87565b610e966114fa565b60c9546001600160a01b0316600114610ec15760405162461bcd60e51b8152600401610568906122b0565b6000610ed08787878787611540565b8051602091820120600081815260fc90925260409091205490915060ff1615610f4d5760405162461bcd60e51b815260206004820152602960248201527f4d6573736167652077617320616c7265616479207375636365737366756c6c7960448201526808195e1958dd5d195960ba1b6064820152608401610568565b81516040516308b50fa160e11b815260048101919091527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063116a1f4290602401602060405180830381865afa158015610fb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd991906123e2565b61101e5760405162461bcd60e51b815260206004820152601660248201527510985d18da081a5cc81b9bdd08199a5b985b1a5e995960521b6044820152606401610568565b815160405163ea5f084f60e01b81526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163ea5f084f916110719160040190815260200190565b602060405180830381865afa15801561108e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b29190612390565b90506110c48183878660200151611ac0565b6111005760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b210383937b7b360991b6044820152606401610568565b507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316866001600160a01b0316036111825760405162461bcd60e51b815260206004820152601c60248201527f466f7262696420746f2063616c6c206d657373616765207175657565000000006044820152606401610568565b61118b86611b99565b60c9546001600160a01b03908116908816036111e25760405162461bcd60e51b815260206004820152601660248201527524b73b30b634b21036b2b9b9b0b3b29039b2b73232b960511b6044820152606401610568565b60c980546001600160a01b0319166001600160a01b038981169190911790915560405160009188169087906112189087906123ff565b60006040518083038185875af1925050503d8060008114611255576040519150601f19603f3d011682016040523d82523d6000602084013e61125a565b606091505b505060c980546001600160a01b0319166001179055905080156112bc57600082815260fc6020526040808220805460ff191660011790555183917f4641df4a962071e12719d8c8c8e5ac7fc4d97b927346a3d7a335b1f7517e133c91a26112e8565b60405182907f99d0e048484baa1b1540b1367cb128acd7ab2946d1ed91ec10e3c85e4bf51b8f90600090a25b5050505050505050565b6112fa610512565b6001600160a01b03811661135f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610568565b610e83816119db565b600054610100900460ff16158080156113885750600054600160ff909116105b806113a25750303b1580156113a2575060005460ff166001145b6114055760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610568565b6000805460ff191660011790558015611428576000805461ff0019166101001790555b6114328585611be7565b60fe80546001600160a01b038086166001600160a01b03199283161790925560ff80549285169290911691909117905560036101008190556040517fd700562df02eb66951f6f5275df7ebd7c0ec58b3422915789b3b1877aab2e52b916114a59160009190918252602082015260400190565b60405180910390a180156114f3576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050565b60655460ff16156105715760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610568565b6060858585858560405160240161155b95949392919061241b565b60408051601f198184030181529190526020810180516001600160e01b0316634778999760e11b179052905095945050505050565b611598611c68565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fd0ad31e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061161c9190612390565b9050600061162d3388888589611540565b604051636bb825d760e11b8152600481018690529091506000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d7704bae90602401602060405180830381865afa158015611698573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116bc9190612390565b90506116c88782612476565b3410156117105760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e74206d73672e76616c756560501b6044820152606401610568565b80156117b65760cb546040516000916001600160a01b03169083908381818185875af1925050503d8060008114611763576040519150601f19603f3d011682016040523d82523d6000602084013e611768565b606091505b50509050806117b45760405162461bcd60e51b81526020600482015260186024820152774661696c656420746f20646564756374207468652066656560401b6044820152606401610568565b505b604051634d8acbc160e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690639b15978290611826907f0000000000000000000000000000000000000000000000000000000000000000908990879060040161248f565b600060405180830381600087803b15801561184057600080fd5b505af1158015611854573d6000803e3d6000fd5b5050505060008280519060200120905060fb6000828152602001908152602001600020546000146118bc5760405162461bcd60e51b81526020600482015260126024820152714475706c696361746564206d65737361676560701b6044820152606401610568565b600081815260fb602052604090204290556001600160a01b038916336001600160a01b03167f104371f3b442861a2a7b82a070afbbaab748bb13757bf47769e170e37809ec1e8a878a8c60405161191694939291906124b6565b60405180910390a3348290038881039089146119cc576000866001600160a01b03168260405160006040518083038185875af1925050503d8060008114611979576040519150601f19603f3d011682016040523d82523d6000602084013e61197e565b606091505b50509050806119ca5760405162461bcd60e51b81526020600482015260186024820152774661696c656420746f20726566756e64207468652066656560401b6044820152606401610568565b505b50505050506114f36001609755565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b611a356114fa565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611a6a3390565b6040516001600160a01b03909116815260200160405180910390a1565b611a8f611cc8565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33611a6a565b600060208251611ad091906124fb565b15611b0d5760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b210383937b7b360991b6044820152606401610568565b600060208351611b1d919061250f565b905060005b81811015611b8c57602081810285010151611b3e6002876124fb565b600003611b5a5760008781526020829052604090209650611b6b565b600081815260208890526040902096505b611b7660028761250f565b9550508080611b8490612523565b915050611b22565b5050509290911492915050565b306001600160a01b03821603610e835760405162461bcd60e51b81526020600482015260136024820152722337b93134b2103a379031b0b6361039b2b63360691b6044820152606401610568565b600054610100900460ff16611c0e5760405162461bcd60e51b81526004016105689061253c565b611c16611d11565b611c1e611d40565b611c26611d6f565b60c980546001600160a01b03191660011790556001600160a01b03811615611c645760cb80546001600160a01b0319166001600160a01b0383161790555b5050565b600260975403611cba5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610568565b6002609755565b6001609755565b60655460ff166105715760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610568565b600054610100900460ff16611d385760405162461bcd60e51b81526004016105689061253c565b610571611d9e565b600054610100900460ff16611d675760405162461bcd60e51b81526004016105689061253c565b610571611dce565b600054610100900460ff16611d965760405162461bcd60e51b81526004016105689061253c565b610571611e01565b600054610100900460ff16611dc55760405162461bcd60e51b81526004016105689061253c565b610571336119db565b600054610100900460ff16611df55760405162461bcd60e51b81526004016105689061253c565b6065805460ff19169055565b600054610100900460ff16611cc15760405162461bcd60e51b81526004016105689061253c565b600060208284031215611e3a57600080fd5b5035919050565b80356001600160a01b0381168114611e5857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611e9657611e96611e5d565b60405290565b600082601f830112611ead57600080fd5b813567ffffffffffffffff80821115611ec857611ec8611e5d565b604051601f8301601f19908116603f01168101908282118183101715611ef057611ef0611e5d565b81604052838152866020858801011115611f0957600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a08688031215611f4157600080fd5b611f4a86611e41565b9450611f5860208701611e41565b93506040860135925060608601359150608086013567ffffffffffffffff811115611f8257600080fd5b611f8e88828901611e9c565b9150509295509295909350565b600060208284031215611fad57600080fd5b611fb682611e41565b9392505050565b600080600080600080600060e0888a031215611fd857600080fd5b611fe188611e41565b9650611fef60208901611e41565b95506040880135945060608801359350608088013567ffffffffffffffff81111561201957600080fd5b6120258a828b01611e9c565b93505060a088013563ffffffff8116811461203f57600080fd5b915061204d60c08901611e41565b905092959891949750929550565b60008060008060008060a0878903121561207457600080fd5b61207d87611e41565b955060208701359450604087013567ffffffffffffffff808211156120a157600080fd5b818901915089601f8301126120b557600080fd5b8135818111156120c457600080fd5b8a60208285010111156120d657600080fd5b602083019650809550505050606087013591506120f560808801611e41565b90509295509295509295565b6000806000806080858703121561211757600080fd5b61212085611e41565b935060208501359250604085013567ffffffffffffffff81111561214357600080fd5b61214f87828801611e9c565b949793965093946060013593505050565b8015158114610e8357600080fd5b60006020828403121561218057600080fd5b8135611fb681612160565b60008060008060008060c087890312156121a457600080fd5b6121ad87611e41565b95506121bb60208801611e41565b94506040870135935060608701359250608087013567ffffffffffffffff808211156121e657600080fd5b6121f28a838b01611e9c565b935060a089013591508082111561220857600080fd5b908801906040828b03121561221c57600080fd5b612224611e73565b8235815260208301358281111561223a57600080fd5b6122468c828601611e9c565b6020830152508093505050509295509295509295565b6000806000806080858703121561227257600080fd5b61227b85611e41565b935061228960208601611e41565b925061229760408601611e41565b91506122a560608601611e41565b905092959194509250565b6020808252601f908201527f4d65737361676520697320616c726561647920696e20657865637574696f6e00604082015260600190565b60208082526026908201527f50726f7669646564206d65737361676520686173206e6f74206265656e20656e6040820152651c5d595d595960d21b606082015260800190565b60005b83811015612348578181015183820152602001612330565b50506000910152565b6000815180845261236981602086016020860161232d565b601f01601f19169290920160200192915050565b602081526000611fb66020830184612351565b6000602082840312156123a257600080fd5b5051919050565b6001600160a01b038416815263ffffffff831660208201526060604082018190526000906123d990830184612351565b95945050505050565b6000602082840312156123f457600080fd5b8151611fb681612160565b6000825161241181846020870161232d565b9190910192915050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061245590830184612351565b979650505050505050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561248957612489612460565b92915050565b60018060a01b03841681528260208201526060604082015260006123d96060830184612351565b8481528360208201528260408201526080606082015260006124db6080830184612351565b9695505050505050565b634e487b7160e01b600052601260045260246000fd5b60008261250a5761250a6124e5565b500690565b60008261251e5761251e6124e5565b500490565b60006001820161253557612535612460565b5060010190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea26469706673582212209057da998e95c359c7420891a61250cce509ebb3294d0a15814b66d0b55cff0964736f6c63430008100033";

type L1ScrollMessengerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: L1ScrollMessengerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class L1ScrollMessenger__factory extends ContractFactory {
  constructor(...args: L1ScrollMessengerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _counterpart: AddressLike,
    _rollup: AddressLike,
    _messageQueue: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _counterpart,
      _rollup,
      _messageQueue,
      overrides || {}
    );
  }
  override deploy(
    _counterpart: AddressLike,
    _rollup: AddressLike,
    _messageQueue: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _counterpart,
      _rollup,
      _messageQueue,
      overrides || {}
    ) as Promise<
      L1ScrollMessenger & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): L1ScrollMessenger__factory {
    return super.connect(runner) as L1ScrollMessenger__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L1ScrollMessengerInterface {
    return new Interface(_abi) as L1ScrollMessengerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): L1ScrollMessenger {
    return new Contract(address, _abi, runner) as unknown as L1ScrollMessenger;
  }
}
