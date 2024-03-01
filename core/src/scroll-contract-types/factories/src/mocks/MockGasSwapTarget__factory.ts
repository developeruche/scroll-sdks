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
import type { NonPayableOverrides } from "../../../common";
import type {
  MockGasSwapTarget,
  MockGasSwapTargetInterface,
} from "../../../src/mocks/MockGasSwapTarget";

const _abi = [
  {
    inputs: [],
    name: "amountIn",
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
    name: "refund",
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
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "setAmountIn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_refund",
        type: "uint256",
      },
    ],
    name: "setRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "setToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
  "0x608060405234801561001057600080fd5b506103bb806100206000396000f3fe6080604052600436106100745760003560e01c80636717f5b01161004e5780636717f5b0146101085780636bed55a6146101285780638119c0651461013e578063fc0c546a1461015357600080fd5b80630cc9df5c14610080578063144fa6d7146100a2578063590e1ae3146100df57600080fd5b3661007b57005b600080fd5b34801561008c57600080fd5b506100a061009b36600461031a565b600255565b005b3480156100ae57600080fd5b506100a06100bd366004610333565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b3480156100eb57600080fd5b506100f560025481565b6040519081526020015b60405180910390f35b34801561011457600080fd5b506100a061012336600461031a565b600155565b34801561013457600080fd5b506100f560015481565b34801561014a57600080fd5b506100a061018b565b34801561015f57600080fd5b50600054610173906001600160a01b031681565b6040516001600160a01b0390911681526020016100ff565b6000546001546040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b03909116906323b872dd906064016020604051808303816000875af11580156101e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020a9190610363565b50604051600090339047908381818185875af1925050503d806000811461024d576040519150601f19603f3d011682016040523d82523d6000602084013e610252565b606091505b505090508061029d5760405162461bcd60e51b81526020600482015260136024820152721d1c985b9cd9995c881155120819985a5b1959606a1b604482015260640160405180910390fd5b60005460025460405163a9059cbb60e01b815233600482015260248101919091526001600160a01b039091169063a9059cbb906044016020604051808303816000875af11580156102f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103169190610363565b5050565b60006020828403121561032c57600080fd5b5035919050565b60006020828403121561034557600080fd5b81356001600160a01b038116811461035c57600080fd5b9392505050565b60006020828403121561037557600080fd5b8151801515811461035c57600080fdfea2646970667358221220830f080cb768bc2ea34535e7d5b67099083f8d4b636972d6dbd9c484022d673264736f6c63430008100033";

type MockGasSwapTargetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockGasSwapTargetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockGasSwapTarget__factory extends ContractFactory {
  constructor(...args: MockGasSwapTargetConstructorParams) {
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
      MockGasSwapTarget & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockGasSwapTarget__factory {
    return super.connect(runner) as MockGasSwapTarget__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockGasSwapTargetInterface {
    return new Interface(_abi) as MockGasSwapTargetInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockGasSwapTarget {
    return new Contract(address, _abi, runner) as unknown as MockGasSwapTarget;
  }
}