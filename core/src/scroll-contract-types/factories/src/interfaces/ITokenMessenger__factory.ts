/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ITokenMessenger,
  ITokenMessengerInterface,
} from "../../../src/interfaces/ITokenMessenger";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "destinationDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "mintRecipient",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "burnToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "destinationCaller",
        type: "bytes32",
      },
    ],
    name: "depositForBurnWithCaller",
    outputs: [
      {
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "originalMessage",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "originalAttestation",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "newDestinationCaller",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "newMintRecipient",
        type: "bytes32",
      },
    ],
    name: "replaceDepositForBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ITokenMessenger__factory {
  static readonly abi = _abi;
  static createInterface(): ITokenMessengerInterface {
    return new Interface(_abi) as ITokenMessengerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ITokenMessenger {
    return new Contract(address, _abi, runner) as unknown as ITokenMessenger;
  }
}