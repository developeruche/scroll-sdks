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
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MockERC20,
  MockERC20Interface,
} from "../../../src/mocks/MockERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
] as const;

const _bytecode =
  "0x6101606040523480156200001257600080fd5b5060405162001ca738038062001ca783398101604081905262000035916200033a565b8280604051806040016040528060018152602001603160f81b81525085856200006d620000676200017a60201b60201c565b6200017e565b60046200007b83826200044e565b5060056200008a82826200044e565b505050620000a8600683620001ce60201b620007841790919060201c565b61012052620000c5816007620001ce602090811b6200078417901c565b61014052815160208084019190912060e052815190820120610100524660a0526200015360e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c05250600a805460ff191660ff9290921691909117905550620005749050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602083511015620001ee57620001e6836200021e565b905062000218565b8262000205836200026a60201b620007b51760201c565b906200021290826200044e565b5060ff90505b92915050565b600080829050601f8151111562000255578260405163305a27a960e01b81526004016200024c91906200051a565b60405180910390fd5b805162000262826200054f565b179392505050565b90565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620002a057818101518382015260200162000286565b50506000910152565b600082601f830112620002bb57600080fd5b81516001600160401b0380821115620002d857620002d86200026d565b604051601f8301601f19908116603f011681019082821181831017156200030357620003036200026d565b816040528381528660208588010111156200031d57600080fd5b6200033084602083016020890162000283565b9695505050505050565b6000806000606084860312156200035057600080fd5b83516001600160401b03808211156200036857600080fd5b6200037687838801620002a9565b945060208601519150808211156200038d57600080fd5b506200039c86828701620002a9565b925050604084015160ff81168114620003b457600080fd5b809150509250925092565b600181811c90821680620003d457607f821691505b602082108103620003f557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200044957600081815260208120601f850160051c81016020861015620004245750805b601f850160051c820191505b81811015620004455782815560010162000430565b5050505b505050565b81516001600160401b038111156200046a576200046a6200026d565b62000482816200047b8454620003bf565b84620003fb565b602080601f831160018114620004ba5760008415620004a15750858301515b600019600386901b1c1916600185901b17855562000445565b600085815260208120601f198616915b82811015620004eb57888601518255948401946001909101908401620004ca565b50858210156200050a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60208152600082518060208401526200053b81604085016020870162000283565b601f01601f19169190910160400192915050565b80516020808301519190811015620003f55760001960209190910360031b1b16919050565b60805160a05160c05160e0516101005161012051610140516116d8620005cf60003960006104830152600061045801526000610bdc01526000610bb401526000610b0f01526000610b3901526000610b6301526116d86000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c8063715018a6116100b85780639dc29fac1161007c5780639dc29fac1461027c578063a457c2d71461028f578063a9059cbb146102a2578063d505accf146102b5578063dd62ed3e146102c8578063f2fde38b146102db57600080fd5b8063715018a6146102215780637ecebe001461022b57806384b0196e1461023e5780638da5cb5b1461025957806395d89b411461027457600080fd5b80633644e515116100ff5780633644e515146101b757806339509351146101bf57806340c10f19146101d257806342966c68146101e557806370a08231146101f857600080fd5b806306fdde031461013c578063095ea7b31461015a57806318160ddd1461017d57806323b872dd1461018f578063313ce567146101a2575b600080fd5b6101446102ee565b60405161015191906112e3565b60405180910390f35b61016d610168366004611319565b610380565b6040519015158152602001610151565b6003545b604051908152602001610151565b61016d61019d366004611343565b61039a565b600a5460405160ff9091168152602001610151565b6101816103be565b61016d6101cd366004611319565b6103cd565b61016d6101e0366004611319565b6103ef565b61016d6101f336600461137f565b610404565b610181610206366004611398565b6001600160a01b031660009081526001602052604090205490565b610229610418565b005b610181610239366004611398565b61042c565b61024661044a565b60405161015197969594939291906113b3565b6000546040516001600160a01b039091168152602001610151565b6101446104d3565b61016d61028a366004611319565b6104e2565b61016d61029d366004611319565b6104ee565b61016d6102b0366004611319565b61056e565b6102296102c3366004611449565b61057c565b6101816102d63660046114bc565b6106e0565b6102296102e9366004611398565b61070b565b6060600480546102fd906114ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610329906114ef565b80156103765780601f1061034b57610100808354040283529160200191610376565b820191906000526020600020905b81548152906001019060200180831161035957829003601f168201915b5050505050905090565b60003361038e8185856107b8565b60019150505b92915050565b6000336103a88582856108dd565b6103b3858585610957565b506001949350505050565b60006103c8610b02565b905090565b60003361038e8185856103e083836106e0565b6103ea9190611523565b6107b8565b60006103fb8383610c2d565b50600192915050565b60006104103383610cee565b506001919050565b610420610e1f565b61042a6000610e79565b565b6001600160a01b038116600090815260086020526040812054610394565b60006060808280808361047e7f00000000000000000000000000000000000000000000000000000000000000006006610ec9565b6104a97f00000000000000000000000000000000000000000000000000000000000000006007610ec9565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b6060600580546102fd906114ef565b60006103fb8383610cee565b600033816104fc82866106e0565b9050838110156105615760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6103b382868684036107b8565b60003361038e818585610957565b834211156105cc5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610558565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105fb8c610f6d565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061065682610f95565b9050600061066682878787610fc2565b9050896001600160a01b0316816001600160a01b0316146106c95760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610558565b6106d48a8a8a6107b8565b50505050505050505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b610713610e1f565b6001600160a01b0381166107785760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610558565b61078181610e79565b50565b60006020835110156107a05761079983610fea565b9050610394565b816107ab84826115a8565b5060ff9050610394565b90565b6001600160a01b03831661081a5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610558565b6001600160a01b03821661087b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610558565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006108e984846106e0565b9050600019811461095157818110156109445760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610558565b61095184848484036107b8565b50505050565b6001600160a01b0383166109bb5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610558565b6001600160a01b038216610a1d5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610558565b6001600160a01b03831660009081526001602052604090205481811015610a955760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610558565b6001600160a01b0380851660008181526001602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610af59086815260200190565b60405180910390a3610951565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610b5b57507f000000000000000000000000000000000000000000000000000000000000000046145b15610b8557507f000000000000000000000000000000000000000000000000000000000000000090565b6103c8604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6001600160a01b038216610c835760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610558565b8060036000828254610c959190611523565b90915550506001600160a01b0382166000818152600160209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b038216610d4e5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610558565b6001600160a01b03821660009081526001602052604090205481811015610dc25760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610558565b6001600160a01b03831660008181526001602090815260408083208686039055600380548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91016108d0565b505050565b6000546001600160a01b0316331461042a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610558565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b606060ff8314610edc5761079983611028565b818054610ee8906114ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610f14906114ef565b8015610f615780601f10610f3657610100808354040283529160200191610f61565b820191906000526020600020905b815481529060010190602001808311610f4457829003601f168201915b50505050509050610394565b6001600160a01b03811660009081526008602052604090208054600181018255905b50919050565b6000610394610fa2610b02565b8360405161190160f01b8152600281019290925260228201526042902090565b6000806000610fd387878787611067565b91509150610fe08161112b565b5095945050505050565b600080829050601f81511115611015578260405163305a27a960e01b815260040161055891906112e3565b805161102082611668565b179392505050565b6060600061103583611275565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561109e5750600090506003611122565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156110f2573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661111b57600060019250925050611122565b9150600090505b94509492505050565b600081600481111561113f5761113f61168c565b036111475750565b600181600481111561115b5761115b61168c565b036111a85760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610558565b60028160048111156111bc576111bc61168c565b036112095760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610558565b600381600481111561121d5761121d61168c565b036107815760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610558565b600060ff8216601f81111561039457604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b818110156112c3576020818501810151868301820152016112a7565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006112f6602083018461129d565b9392505050565b80356001600160a01b038116811461131457600080fd5b919050565b6000806040838503121561132c57600080fd5b611335836112fd565b946020939093013593505050565b60008060006060848603121561135857600080fd5b611361846112fd565b925061136f602085016112fd565b9150604084013590509250925092565b60006020828403121561139157600080fd5b5035919050565b6000602082840312156113aa57600080fd5b6112f6826112fd565b60ff60f81b881681526000602060e0818401526113d360e084018a61129d565b83810360408501526113e5818a61129d565b606085018990526001600160a01b038816608086015260a0850187905284810360c0860152855180825283870192509083019060005b818110156114375783518352928401929184019160010161141b565b50909c9b505050505050505050505050565b600080600080600080600060e0888a03121561146457600080fd5b61146d886112fd565b965061147b602089016112fd565b95506040880135945060608801359350608088013560ff8116811461149f57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156114cf57600080fd5b6114d8836112fd565b91506114e6602084016112fd565b90509250929050565b600181811c9082168061150357607f821691505b602082108103610f8f57634e487b7160e01b600052602260045260246000fd5b8082018082111561039457634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b601f821115610e1a57600081815260208120601f850160051c810160208610156115815750805b601f850160051c820191505b818110156115a05782815560010161158d565b505050505050565b815167ffffffffffffffff8111156115c2576115c2611544565b6115d6816115d084546114ef565b8461155a565b602080601f83116001811461160b57600084156115f35750858301515b600019600386901b1c1916600185901b1785556115a0565b600085815260208120601f198616915b8281101561163a5788860151825594840194600190910190840161161b565b50858210156116585787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80516020808301519190811015610f8f5760001960209190910360031b1b16919050565b634e487b7160e01b600052602160045260246000fdfea264697066735822122024bc255353a9fe00286017478b7cd51ae8f7eafaaa63a431c7e06f31e985ce5964736f6c63430008100033";

type MockERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC20__factory extends ContractFactory {
  constructor(...args: MockERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    );
  }
  override deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_name, _symbol, _decimals, overrides || {}) as Promise<
      MockERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockERC20__factory {
    return super.connect(runner) as MockERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC20Interface {
    return new Interface(_abi) as MockERC20Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): MockERC20 {
    return new Contract(address, _abi, runner) as unknown as MockERC20;
  }
}
