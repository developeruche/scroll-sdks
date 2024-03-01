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
  MultipleVersionRollupVerifier,
  MultipleVersionRollupVerifierInterface,
} from "../../../../src/L1/rollup/MultipleVersionRollupVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_verifier",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "uint256",
        name: "startBatchIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "verifier",
        type: "address",
      },
    ],
    name: "UpdateVerifier",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_batchIndex",
        type: "uint256",
      },
    ],
    name: "getVerifier",
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
        name: "_scrollChain",
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
    name: "latestVerifier",
    outputs: [
      {
        internalType: "uint64",
        name: "startBatchIndex",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "verifier",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "legacyVerifiers",
    outputs: [
      {
        internalType: "uint64",
        name: "startBatchIndex",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "verifier",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "legacyVerifiersLength",
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
        internalType: "uint64",
        name: "_startBatchIndex",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_verifier",
        type: "address",
      },
    ],
    name: "updateVerifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_batchIndex",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_aggrProof",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_publicInputHash",
        type: "bytes32",
      },
    ],
    name: "verifyAggregateProof",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610a93380380610a9383398101604081905261002f91610116565b610038336100c6565b6001600160a01b0381166100925760405162461bcd60e51b815260206004820152601560248201527f7a65726f20766572696669657220616464726573730000000000000000000000604482015260640160405180910390fd5b600280546001600160a01b039092166801000000000000000002600160401b600160e01b0319909216919091179055610146565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561012857600080fd5b81516001600160a01b038116811461013f57600080fd5b9392505050565b61093e806101556000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638da5cb5b116100715780638da5cb5b1461015c578063b57919e81461016d578063c4d66de81461017e578063cc780aa114610191578063ef4b5227146101a4578063f2fde38b146101b757600080fd5b80631a2c3cde146100ae5780633561bc27146100ee5780634cf536b314610119578063715018a61461013f578063897630dd14610149575b600080fd5b6100c16100bc366004610785565b6101ca565b6040805167ffffffffffffffff90931683526001600160a01b039091166020830152015b60405180910390f35b6101016100fc366004610785565b610206565b6040516001600160a01b0390911681526020016100e5565b6002546100c19067ffffffffffffffff811690600160401b90046001600160a01b031682565b6101476102bf565b005b600354610101906001600160a01b031681565b6000546001600160a01b0316610101565b6001546040519081526020016100e5565b61014761018c3660046107ba565b6102d3565b61014761019f3660046107dc565b610349565b6101476101b236600461085e565b6103be565b6101476101c53660046107ba565b610662565b600181815481106101da57600080fd5b60009182526020909120015467ffffffffffffffff81169150600160401b90046001600160a01b031682565b6040805180820190915260025467ffffffffffffffff8116808352600160401b9091046001600160a01b03166020830152600091908310156102b557600154805b80156102b257600180820381548110610262576102626108a0565b60009182526020918290206040805180820190915291015467ffffffffffffffff8116808352600160401b9091046001600160a01b03169282019290925293508510156102b25760001901610247565b50505b6020015192915050565b6102c76106db565b6102d16000610735565b565b6102db6106db565b6003546001600160a01b0316156103275760405162461bcd60e51b815260206004820152600b60248201526a1a5b9a5d1a585b1a5e995960aa1b60448201526064015b60405180910390fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600061035485610206565b604051636b40634160e01b81529091506001600160a01b03821690636b40634190610387908790879087906004016108b6565b60006040518083038186803b15801561039f57600080fd5b505afa1580156103b3573d6000803e3d6000fd5b505050505050505050565b6103c66106db565b600360009054906101000a90046001600160a01b03166001600160a01b031663059def616040518163ffffffff1660e01b8152600401602060405180830381865afa158015610419573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043d91906108ef565b8267ffffffffffffffff16116104955760405162461bcd60e51b815260206004820152601b60248201527f737461727420626174636820696e6465782066696e616c697a65640000000000604482015260640161031e565b6040805180820190915260025467ffffffffffffffff808216808452600160401b9092046001600160a01b03166020840152841610156105175760405162461bcd60e51b815260206004820152601b60248201527f737461727420626174636820696e64657820746f6f20736d616c6c0000000000604482015260640161031e565b6001600160a01b0382166105655760405162461bcd60e51b81526020600482015260156024820152747a65726f207665726966696572206164647265737360581b604482015260640161031e565b805167ffffffffffffffff808516911610156105e75760018054808201825560009190915281517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6909101805460208401516001600160a01b0316600160401b026001600160e01b031990911667ffffffffffffffff93841617179055831681525b6001600160a01b038216602082810182905282516002805467ffffffffffffffff9283166001600160e01b031990911617600160401b8502179055604080519187168252918101929092527f1363b06925d4266686ad6ab546259321a7ed3cc0bcc55ada2c6431a754b3b4e2910160405180910390a1505050565b61066a6106db565b6001600160a01b0381166106cf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161031e565b6106d881610735565b50565b6000546001600160a01b031633146102d15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161031e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561079757600080fd5b5035919050565b80356001600160a01b03811681146107b557600080fd5b919050565b6000602082840312156107cc57600080fd5b6107d58261079e565b9392505050565b600080600080606085870312156107f257600080fd5b84359350602085013567ffffffffffffffff8082111561081157600080fd5b818701915087601f83011261082557600080fd5b81358181111561083457600080fd5b88602082850101111561084657600080fd5b95986020929092019750949560400135945092505050565b6000806040838503121561087157600080fd5b823567ffffffffffffffff8116811461088957600080fd5b91506108976020840161079e565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b604081528260408201528284606083013760006060848301015260006060601f19601f8601168301019050826020830152949350505050565b60006020828403121561090157600080fd5b505191905056fea2646970667358221220287ebfbf50e134da5375973515cb64fdd3fcd898d273dcd2ed1a0a51e0dcf0b664736f6c63430008100033";

type MultipleVersionRollupVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultipleVersionRollupVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultipleVersionRollupVerifier__factory extends ContractFactory {
  constructor(...args: MultipleVersionRollupVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _verifier: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_verifier, overrides || {});
  }
  override deploy(
    _verifier: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_verifier, overrides || {}) as Promise<
      MultipleVersionRollupVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MultipleVersionRollupVerifier__factory {
    return super.connect(runner) as MultipleVersionRollupVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultipleVersionRollupVerifierInterface {
    return new Interface(_abi) as MultipleVersionRollupVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MultipleVersionRollupVerifier {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MultipleVersionRollupVerifier;
  }
}