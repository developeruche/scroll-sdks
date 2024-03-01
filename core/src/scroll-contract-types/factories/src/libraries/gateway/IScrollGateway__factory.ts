/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IScrollGateway,
  IScrollGatewayInterface,
} from "../../../../src/libraries/gateway/IScrollGateway";

const _abi = [
  {
    inputs: [],
    name: "ErrorCallerIsNotCounterpartGateway",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrorCallerIsNotMessenger",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrorNotInDropMessageContext",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrorZeroAddress",
    type: "error",
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
    name: "router",
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
] as const;

export class IScrollGateway__factory {
  static readonly abi = _abi;
  static createInterface(): IScrollGatewayInterface {
    return new Interface(_abi) as IScrollGatewayInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IScrollGateway {
    return new Contract(address, _abi, runner) as unknown as IScrollGateway;
  }
}