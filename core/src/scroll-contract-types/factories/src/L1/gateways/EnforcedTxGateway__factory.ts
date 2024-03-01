/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  EnforcedTxGateway,
  EnforcedTxGatewayInterface,
} from "../../../../src/L1/gateways/EnforcedTxGateway";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
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
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
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
        name: "_queue",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeVault",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
    name: "sendTransaction",
    outputs: [],
    stateMutability: "payable",
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
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_refundAddress",
        type: "address",
      },
    ],
    name: "sendTransaction",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b6100dd565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116146100db576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6118ec806100ec6000396000f3fe6080604052600436106100dd5760003560e01c8063715018a61161007f5780638da5cb5b116100595780638da5cb5b14610244578063bedb86fb14610262578063f2fde38b14610282578063fb403d7c146102a257600080fd5b8063715018a6146101da5780637ecebe00146101ef57806384b0196e1461021c57600080fd5b80633b70c18a116100bb5780633b70c18a1461013f578063478222c214610177578063485cc955146101975780635c975abb146101b757600080fd5b80632a6cccb2146100e25780633644e515146101045780633934ce9d1461012c575b600080fd5b3480156100ee57600080fd5b506101026100fd36600461134b565b6102b5565b005b34801561011057600080fd5b5061011961031e565b6040519081526020015b60405180910390f35b61010261013a3660046113af565b61032d565b34801561014b57600080fd5b5060fd5461015f906001600160a01b031681565b6040516001600160a01b039091168152602001610123565b34801561018357600080fd5b5060fe5461015f906001600160a01b031681565b3480156101a357600080fd5b506101026101b2366004611417565b6103c5565b3480156101c357600080fd5b5060975460ff166040519015158152602001610123565b3480156101e657600080fd5b50610102610564565b3480156101fb57600080fd5b5061011961020a36600461134b565b60ff6020526000908152604090205481565b34801561022857600080fd5b50610231610578565b6040516101239796959493929190611490565b34801561025057600080fd5b506033546001600160a01b031661015f565b34801561026e57600080fd5b5061010261027d366004611526565b610616565b34801561028e57600080fd5b5061010261029d36600461134b565b610637565b6101026102b036600461155e565b6106ad565b6102bd61086e565b60fe80546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f4aadc32827849f797733838c61302f7f56d2b6db28caa175eb3f7f8e5aba25f5910160405180910390a15050565b60006103286108c8565b905090565b6103356108d2565b3332146103af5760405162461bcd60e51b815260206004820152603960248201527f4f6e6c7920454f412073656e646572732061726520616c6c6f77656420746f2060448201527f73656e6420656e666f72636564207472616e73616374696f6e0000000000000060648201526084015b60405180910390fd5b6103be33868686868633610918565b5050505050565b600054610100900460ff16158080156103e55750600054600160ff909116105b806103ff5750303b1580156103ff575060005460ff166001145b6104625760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016103a6565b6000805460ff191660011790558015610485576000805461ff0019166101001790555b61048d610bbd565b610495610bec565b61049d610c1b565b6104e960405180604001604052806011815260200170456e666f7263656454784761746577617960781b815250604051806040016040528060018152602001603160f81b815250610c4a565b60fd80546001600160a01b038086166001600160a01b03199283161790925560fe805492851692909116919091179055801561055f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b61056c61086e565b6105766000610c7f565b565b60006060806000806000606060c9546000801b148015610598575060ca54155b6105dc5760405162461bcd60e51b81526020600482015260156024820152741152540dcc4c8e88155b9a5b9a5d1a585b1a5e9959605a1b60448201526064016103a6565b6105e4610cd1565b6105ec610d63565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b61061e61086e565b801561062f5761062c610d72565b50565b61062c610dcc565b61063f61086e565b6001600160a01b0381166106a45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103a6565b61062c81610c7f565b6106b56108d2565b824211156106f95760405162461bcd60e51b81526020600482015260116024820152701cda59db985d1d5c9948195e1c1a5c9959607a1b60448201526064016103a6565b600060ff60008b6001600160a01b03166001600160a01b0316815260200190815260200160002054905060007f302d96da71d942dc3052ca041618b37fc929a10d432f3a337b5be0a8385c9afe8b8b8b8b8b8b60405161075a929190611688565b6040805191829003822060208301979097526001600160a01b0395861690820152939092166060840152608083015260a082015260c081019190915260e0810183905261010081018690526101200160408051601f1981840301815291815281516020928301206001600160a01b038e16600090815260ff90935290822060018501905591506107e982610e05565b905060006107f78287610e38565b90508c6001600160a01b0316816001600160a01b0316146108505760405162461bcd60e51b8152602060048201526013602482015272496e636f7272656374207369676e617475726560681b60448201526064016103a6565b61085f8d8d8d8d8d8d8b610918565b50505050505050505050505050565b6033546001600160a01b031633146105765760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103a6565b6000610328610e5c565b60975460ff16156105765760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016103a6565b610920610ed0565b60fd54604051636bb825d760e11b8152600481018690526001600160a01b0390911690600090829063d7704bae90602401602060405180830381865afa15801561096e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109929190611698565b9050803410156109e45760405162461bcd60e51b815260206004820152601a60248201527f496e73756666696369656e742076616c756520666f722066656500000000000060448201526064016103a6565b8015610a8f5760fe546040516000916001600160a01b03169083908381818185875af1925050503d8060008114610a37576040519150601f19603f3d011682016040523d82523d6000602084013e610a3c565b606091505b5050905080610a8d5760405162461bcd60e51b815260206004820152601860248201527f4661696c656420746f206465647563742074686520666565000000000000000060448201526064016103a6565b505b6040516305ee378560e51b81526001600160a01b0383169063bdc6f0a090610ac5908c908c908c908c908c908c906004016116b1565b600060405180830381600087803b158015610adf57600080fd5b505af1158015610af3573d6000803e3d6000fd5b5050503482810391508214610ba7576000846001600160a01b03168260405160006040518083038185875af1925050503d8060008114610b4f576040519150601f19603f3d011682016040523d82523d6000602084013e610b54565b606091505b5050905080610ba55760405162461bcd60e51b815260206004820152601860248201527f4661696c656420746f20726566756e642074686520666565000000000000000060448201526064016103a6565b505b505050610bb46001606555565b50505050505050565b600054610100900460ff16610be45760405162461bcd60e51b81526004016103a69061170d565b610576610f30565b600054610100900460ff16610c135760405162461bcd60e51b81526004016103a69061170d565b610576610f60565b600054610100900460ff16610c425760405162461bcd60e51b81526004016103a69061170d565b610576610f87565b600054610100900460ff16610c715760405162461bcd60e51b81526004016103a69061170d565b610c7b8282610fba565b5050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b606060cb8054610ce090611758565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0c90611758565b8015610d595780601f10610d2e57610100808354040283529160200191610d59565b820191906000526020600020905b815481529060010190602001808311610d3c57829003601f168201915b5050505050905090565b606060cc8054610ce090611758565b610d7a6108d2565b6097805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610daf3390565b6040516001600160a01b03909116815260200160405180910390a1565b610dd4611009565b6097805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33610daf565b6000610e32610e126108c8565b8360405161190160f01b8152600281019290925260228201526042902090565b92915050565b6000806000610e478585611052565b91509150610e5481611097565b509392505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610e876111e1565b610e8f61123a565b60408051602081019490945283019190915260608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600260655403610f225760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103a6565b6002606555565b6001606555565b600054610100900460ff16610f575760405162461bcd60e51b81526004016103a69061170d565b61057633610c7f565b600054610100900460ff16610f295760405162461bcd60e51b81526004016103a69061170d565b600054610100900460ff16610fae5760405162461bcd60e51b81526004016103a69061170d565b6097805460ff19169055565b600054610100900460ff16610fe15760405162461bcd60e51b81526004016103a69061170d565b60cb610fed83826117e0565b5060cc610ffa82826117e0565b5050600060c981905560ca5550565b60975460ff166105765760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016103a6565b60008082516041036110885760208301516040840151606085015160001a61107c8782858561126b565b94509450505050611090565b506000905060025b9250929050565b60008160048111156110ab576110ab6118a0565b036110b35750565b60018160048111156110c7576110c76118a0565b036111145760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016103a6565b6002816004811115611128576111286118a0565b036111755760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016103a6565b6003816004811115611189576111896118a0565b0361062c5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016103a6565b6000806111ec610cd1565b805190915015611203578051602090910120919050565b60c95480156112125792915050565b7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4709250505090565b600080611245610d63565b80519091501561125c578051602090910120919050565b60ca5480156112125792915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156112a25750600090506003611326565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156112f6573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661131f57600060019250925050611326565b9150600090505b94509492505050565b80356001600160a01b038116811461134657600080fd5b919050565b60006020828403121561135d57600080fd5b6113668261132f565b9392505050565b60008083601f84011261137f57600080fd5b50813567ffffffffffffffff81111561139757600080fd5b60208301915083602082850101111561109057600080fd5b6000806000806000608086880312156113c757600080fd5b6113d08661132f565b94506020860135935060408601359250606086013567ffffffffffffffff8111156113fa57600080fd5b6114068882890161136d565b969995985093965092949392505050565b6000806040838503121561142a57600080fd5b6114338361132f565b91506114416020840161132f565b90509250929050565b6000815180845260005b8181101561147057602081850181015186830182015201611454565b506000602082860101526020601f19601f83011685010191505092915050565b60ff60f81b881681526000602060e0818401526114b060e084018a61144a565b83810360408501526114c2818a61144a565b606085018990526001600160a01b038816608086015260a0850187905284810360c0860152855180825283870192509083019060005b81811015611514578351835292840192918401916001016114f8565b50909c9b505050505050505050505050565b60006020828403121561153857600080fd5b8135801515811461136657600080fd5b634e487b7160e01b600052604160045260246000fd5b60008060008060008060008060006101008a8c03121561157d57600080fd5b6115868a61132f565b985061159460208b0161132f565b975060408a0135965060608a0135955060808a013567ffffffffffffffff808211156115bf57600080fd5b6115cb8d838e0161136d565b909750955060a08c0135945060c08c01359150808211156115eb57600080fd5b818c0191508c601f8301126115ff57600080fd5b81358181111561161157611611611548565b604051601f8201601f19908116603f0116810190838211818310171561163957611639611548565b816040528281528f602084870101111561165257600080fd5b82602086016020830137600060208483010152809650505050505061167960e08b0161132f565b90509295985092959850929598565b8183823760009101908152919050565b6000602082840312156116aa57600080fd5b5051919050565b6001600160a01b03878116825286166020820152604081018590526060810184905260a06080820181905281018290526000828460c0840137600060c0848401015260c0601f19601f8501168301019050979650505050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600181811c9082168061176c57607f821691505b60208210810361178c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561055f57600081815260208120601f850160051c810160208610156117b95750805b601f850160051c820191505b818110156117d8578281556001016117c5565b505050505050565b815167ffffffffffffffff8111156117fa576117fa611548565b61180e816118088454611758565b84611792565b602080601f831160018114611843576000841561182b5750858301515b600019600386901b1c1916600185901b1785556117d8565b600085815260208120601f198616915b8281101561187257888601518255948401946001909101908401611853565b50858210156118905787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052602160045260246000fdfea264697066735822122090110dcc2fdb2881137c7627eb4141ce6ba64366df600fd41288ab2d74ed995064736f6c63430008100033";

type EnforcedTxGatewayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EnforcedTxGatewayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EnforcedTxGateway__factory extends ContractFactory {
  constructor(...args: EnforcedTxGatewayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      EnforcedTxGateway & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EnforcedTxGateway__factory {
    return super.connect(runner) as EnforcedTxGateway__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnforcedTxGatewayInterface {
    return new Interface(_abi) as EnforcedTxGatewayInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EnforcedTxGateway {
    return new Contract(address, _abi, runner) as unknown as EnforcedTxGateway;
  }
}