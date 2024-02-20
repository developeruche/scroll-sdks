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
  TokenRateLimiter,
  TokenRateLimiterInterface,
} from "../../../src/rate-limiter/TokenRateLimiter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_periodDuration",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "ExceedTotalLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "PeriodIsZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "TotalLimitIsZero",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldTotalLimit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newTotalLimit",
        type: "uint256",
      },
    ],
    name: "UpdateTotalLimit",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    name: "TOKEN_SPENDER_ROLE",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addUsedAmount",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "currentPeriod",
    outputs: [
      {
        internalType: "uint48",
        name: "lastUpdateTs",
        type: "uint48",
      },
      {
        internalType: "uint104",
        name: "limit",
        type: "uint104",
      },
      {
        internalType: "uint104",
        name: "amount",
        type: "uint104",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    name: "periodDuration",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint104",
        name: "_newTotalLimit",
        type: "uint104",
      },
    ],
    name: "updateTotalLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001169380380620011698339810160408190526200003491620001c2565b80600003620000565760405163b5ed5a3b60e01b815260040160405180910390fd5b620000636000336200006c565b608052620001dc565b620000838282620000af60201b620006ce1760201c565b6000828152600160209081526040909120620000aa9183906200075262000150821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166200014c576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200010b3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600062000167836001600160a01b03841662000170565b90505b92915050565b6000818152600183016020526040812054620001b9575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200016a565b5060006200016a565b600060208284031215620001d557600080fd5b5051919050565b608051610f6a620001ff6000396000818161026701526103210152610f6a6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80639010d07c1161008c578063b470aade11610066578063b470aade14610262578063ca15c87314610289578063d547741f1461029c578063e3afa278146102af57600080fd5b80639010d07c1461021c57806391d1485414610247578063a217fddf1461025a57600080fd5b80632f2ff15d116100c85780632f2ff15d1461015d57806336568abe146101705780635eeb95981461018357806386bc443e146101aa57600080fd5b806301ffc9a7146100ef5780631cc03f6d14610117578063248a9ca31461012c575b600080fd5b6101026100fd366004610c5d565b6102c2565b60405190151581526020015b60405180910390f35b61012a610125366004610ca3565b6102ed565b005b61014f61013a366004610ccd565b60009081526020819052604090206001015490565b60405190815260200161010e565b61012a61016b366004610ce6565b6104d9565b61012a61017e366004610ce6565b6104fe565b61014f7f267f05081a073059ae452e6ac77ec189636e43e41051d4c3ec760734b3d173cb81565b6101ee6101b8366004610d12565b60026020526000908152604090205465ffffffffffff8116906001600160681b03600160301b8204811691600160981b90041683565b6040805165ffffffffffff90941684526001600160681b03928316602085015291169082015260600161010e565b61022f61022a366004610d2d565b61057c565b6040516001600160a01b03909116815260200161010e565b610102610255366004610ce6565b61059b565b61014f600081565b61014f7f000000000000000000000000000000000000000000000000000000000000000081565b61014f610297366004610ccd565b6105c4565b61012a6102aa366004610ce6565b6105db565b61012a6102bd366004610d4f565b610600565b60006001600160e01b03198216635a05180f60e01b14806102e757506102e782610767565b92915050565b7f267f05081a073059ae452e6ac77ec189636e43e41051d4c3ec760734b3d173cb6103178161079c565b81156104d45760007f000000000000000000000000000000000000000000000000000000000000000061034a8142610da8565b6103549190610dca565b6001600160a01b03851660009081526002602090815260408083208151606081018352905465ffffffffffff81168083526001600160681b03600160301b8304811695840195909552600160981b909104909316918101919091529293509091908311156103c4578491506103e0565b8481604001516001600160681b03166103dd9190610de9565b91505b60208101516001600160681b031615801590610408575080602001516001600160681b031682115b1561043557604051622717fb60e71b81526001600160a01b03871660048201526024015b60405180910390fd5b65ffffffffffff42168152610449826107a9565b6001600160681b0390811660408084019182526001600160a01b03891660009081526002602090815291902084518154929095015192518416600160981b0272ffffffffffffffffffffffffffffffffffffff93909416600160301b0272ffffffffffffffffffffffffffffffffffffff1990921665ffffffffffff90951694909417171617905550505b505050565b6000828152602081905260409020600101546104f48161079c565b6104d48383610816565b6001600160a01b038116331461056e5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161042c565b6105788282610838565b5050565b6000828152600160205260408120610594908361085a565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60008181526001602052604081206102e790610866565b6000828152602081905260409020600101546105f68161079c565b6104d48383610838565b600061060b8161079c565b816001600160681b031660000361064057604051631ed7b98360e11b81526001600160a01b038416600482015260240161042c565b6001600160a01b03831660008181526002602090815260409182902080546001600160681b03878116600160301b81810272ffffffffffffffffffffffffff0000000000001985161790945585519390920416808352928201529092917fabca8105b6f288784e5396aa33e476c6ed41529aba4d067413b73925777de8e9910160405180910390a250505050565b6106d8828261059b565b610578576000828152602081815260408083206001600160a01b03851684529091529020805460ff1916600117905561070e3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610594836001600160a01b038416610870565b60006001600160e01b03198216637965db0b60e01b14806102e757506301ffc9a760e01b6001600160e01b03198316146102e7565b6107a681336108bf565b50565b60006001600160681b038211156108125760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20316044820152663034206269747360c81b606482015260840161042c565b5090565b61082082826106ce565b60008281526001602052604090206104d49082610752565b6108428282610918565b60008281526001602052604090206104d4908261097d565b60006105948383610992565b60006102e7825490565b60008181526001830160205260408120546108b7575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556102e7565b5060006102e7565b6108c9828261059b565b610578576108d6816109bc565b6108e18360206109ce565b6040516020016108f2929190610e20565b60408051601f198184030181529082905262461bcd60e51b825261042c91600401610e95565b610922828261059b565b15610578576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610594836001600160a01b038416610b6a565b60008260000182815481106109a9576109a9610ec8565b9060005260206000200154905092915050565b60606102e76001600160a01b03831660145b606060006109dd836002610dca565b6109e8906002610de9565b67ffffffffffffffff811115610a0057610a00610ede565b6040519080825280601f01601f191660200182016040528015610a2a576020820181803683370190505b509050600360fc1b81600081518110610a4557610a45610ec8565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610a7457610a74610ec8565b60200101906001600160f81b031916908160001a9053506000610a98846002610dca565b610aa3906001610de9565b90505b6001811115610b1b576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610ad757610ad7610ec8565b1a60f81b828281518110610aed57610aed610ec8565b60200101906001600160f81b031916908160001a90535060049490941c93610b1481610ef4565b9050610aa6565b5083156105945760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161042c565b60008181526001830160205260408120548015610c53576000610b8e600183610f0b565b8554909150600090610ba290600190610f0b565b9050818114610c07576000866000018281548110610bc257610bc2610ec8565b9060005260206000200154905080876000018481548110610be557610be5610ec8565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610c1857610c18610f1e565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506102e7565b60009150506102e7565b600060208284031215610c6f57600080fd5b81356001600160e01b03198116811461059457600080fd5b80356001600160a01b0381168114610c9e57600080fd5b919050565b60008060408385031215610cb657600080fd5b610cbf83610c87565b946020939093013593505050565b600060208284031215610cdf57600080fd5b5035919050565b60008060408385031215610cf957600080fd5b82359150610d0960208401610c87565b90509250929050565b600060208284031215610d2457600080fd5b61059482610c87565b60008060408385031215610d4057600080fd5b50508035926020909101359150565b60008060408385031215610d6257600080fd5b610d6b83610c87565b915060208301356001600160681b0381168114610d8757600080fd5b809150509250929050565b634e487b7160e01b600052601160045260246000fd5b600082610dc557634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615610de457610de4610d92565b500290565b808201808211156102e7576102e7610d92565b60005b83811015610e17578181015183820152602001610dff565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610e58816017850160208801610dfc565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610e89816028840160208801610dfc565b01602801949350505050565b6020815260008251806020840152610eb4816040850160208701610dfc565b601f01601f19169190910160400192915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600081610f0357610f03610d92565b506000190190565b818103818111156102e7576102e7610d92565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220daaa6a4c3aa5c40e7e6a3c99e076632fab7e86a0d654fa5cc17c461dc54e587164736f6c63430008100033";

type TokenRateLimiterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenRateLimiterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenRateLimiter__factory extends ContractFactory {
  constructor(...args: TokenRateLimiterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _periodDuration: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_periodDuration, overrides || {});
  }
  override deploy(
    _periodDuration: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_periodDuration, overrides || {}) as Promise<
      TokenRateLimiter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TokenRateLimiter__factory {
    return super.connect(runner) as TokenRateLimiter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenRateLimiterInterface {
    return new Interface(_abi) as TokenRateLimiterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TokenRateLimiter {
    return new Contract(address, _abi, runner) as unknown as TokenRateLimiter;
  }
}
