/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface L2GasPriceOracleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "calculateIntrinsicGasFee"
      | "estimateCrossDomainMessageFee"
      | "initialize"
      | "intrinsicParams"
      | "l2BaseFee"
      | "owner"
      | "renounceOwnership"
      | "setIntrinsicParams"
      | "setL2BaseFee"
      | "transferOwnership"
      | "updateWhitelist"
      | "whitelist"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Initialized"
      | "IntrinsicParamsUpdated"
      | "L2BaseFeeUpdated"
      | "OwnershipTransferred"
      | "UpdateWhitelist"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "calculateIntrinsicGasFee",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateCrossDomainMessageFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "intrinsicParams",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "l2BaseFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setIntrinsicParams",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setL2BaseFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateWhitelist",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "whitelist", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "calculateIntrinsicGasFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateCrossDomainMessageFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "intrinsicParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "l2BaseFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIntrinsicParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setL2BaseFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace IntrinsicParamsUpdatedEvent {
  export type InputTuple = [
    txGas: BigNumberish,
    txGasContractCreation: BigNumberish,
    zeroGas: BigNumberish,
    nonZeroGas: BigNumberish
  ];
  export type OutputTuple = [
    txGas: bigint,
    txGasContractCreation: bigint,
    zeroGas: bigint,
    nonZeroGas: bigint
  ];
  export interface OutputObject {
    txGas: bigint;
    txGasContractCreation: bigint;
    zeroGas: bigint;
    nonZeroGas: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace L2BaseFeeUpdatedEvent {
  export type InputTuple = [
    oldL2BaseFee: BigNumberish,
    newL2BaseFee: BigNumberish
  ];
  export type OutputTuple = [oldL2BaseFee: bigint, newL2BaseFee: bigint];
  export interface OutputObject {
    oldL2BaseFee: bigint;
    newL2BaseFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdateWhitelistEvent {
  export type InputTuple = [
    _oldWhitelist: AddressLike,
    _newWhitelist: AddressLike
  ];
  export type OutputTuple = [_oldWhitelist: string, _newWhitelist: string];
  export interface OutputObject {
    _oldWhitelist: string;
    _newWhitelist: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface L2GasPriceOracle extends BaseContract {
  connect(runner?: ContractRunner | null): L2GasPriceOracle;
  waitForDeployment(): Promise<this>;

  interface: L2GasPriceOracleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  calculateIntrinsicGasFee: TypedContractMethod<
    [_message: BytesLike],
    [bigint],
    "view"
  >;

  estimateCrossDomainMessageFee: TypedContractMethod<
    [_gasLimit: BigNumberish],
    [bigint],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      _txGas: BigNumberish,
      _txGasContractCreation: BigNumberish,
      _zeroGas: BigNumberish,
      _nonZeroGas: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  intrinsicParams: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        txGas: bigint;
        txGasContractCreation: bigint;
        zeroGas: bigint;
        nonZeroGas: bigint;
      }
    ],
    "view"
  >;

  l2BaseFee: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setIntrinsicParams: TypedContractMethod<
    [
      _txGas: BigNumberish,
      _txGasContractCreation: BigNumberish,
      _zeroGas: BigNumberish,
      _nonZeroGas: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setL2BaseFee: TypedContractMethod<
    [_newL2BaseFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  updateWhitelist: TypedContractMethod<
    [_newWhitelist: AddressLike],
    [void],
    "nonpayable"
  >;

  whitelist: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "calculateIntrinsicGasFee"
  ): TypedContractMethod<[_message: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "estimateCrossDomainMessageFee"
  ): TypedContractMethod<[_gasLimit: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _txGas: BigNumberish,
      _txGasContractCreation: BigNumberish,
      _zeroGas: BigNumberish,
      _nonZeroGas: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "intrinsicParams"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        txGas: bigint;
        txGasContractCreation: bigint;
        zeroGas: bigint;
        nonZeroGas: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "l2BaseFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setIntrinsicParams"
  ): TypedContractMethod<
    [
      _txGas: BigNumberish,
      _txGasContractCreation: BigNumberish,
      _zeroGas: BigNumberish,
      _nonZeroGas: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setL2BaseFee"
  ): TypedContractMethod<[_newL2BaseFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateWhitelist"
  ): TypedContractMethod<[_newWhitelist: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "whitelist"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "IntrinsicParamsUpdated"
  ): TypedContractEvent<
    IntrinsicParamsUpdatedEvent.InputTuple,
    IntrinsicParamsUpdatedEvent.OutputTuple,
    IntrinsicParamsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "L2BaseFeeUpdated"
  ): TypedContractEvent<
    L2BaseFeeUpdatedEvent.InputTuple,
    L2BaseFeeUpdatedEvent.OutputTuple,
    L2BaseFeeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "UpdateWhitelist"
  ): TypedContractEvent<
    UpdateWhitelistEvent.InputTuple,
    UpdateWhitelistEvent.OutputTuple,
    UpdateWhitelistEvent.OutputObject
  >;

  filters: {
    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "IntrinsicParamsUpdated(uint256,uint256,uint256,uint256)": TypedContractEvent<
      IntrinsicParamsUpdatedEvent.InputTuple,
      IntrinsicParamsUpdatedEvent.OutputTuple,
      IntrinsicParamsUpdatedEvent.OutputObject
    >;
    IntrinsicParamsUpdated: TypedContractEvent<
      IntrinsicParamsUpdatedEvent.InputTuple,
      IntrinsicParamsUpdatedEvent.OutputTuple,
      IntrinsicParamsUpdatedEvent.OutputObject
    >;

    "L2BaseFeeUpdated(uint256,uint256)": TypedContractEvent<
      L2BaseFeeUpdatedEvent.InputTuple,
      L2BaseFeeUpdatedEvent.OutputTuple,
      L2BaseFeeUpdatedEvent.OutputObject
    >;
    L2BaseFeeUpdated: TypedContractEvent<
      L2BaseFeeUpdatedEvent.InputTuple,
      L2BaseFeeUpdatedEvent.OutputTuple,
      L2BaseFeeUpdatedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "UpdateWhitelist(address,address)": TypedContractEvent<
      UpdateWhitelistEvent.InputTuple,
      UpdateWhitelistEvent.OutputTuple,
      UpdateWhitelistEvent.OutputObject
    >;
    UpdateWhitelist: TypedContractEvent<
      UpdateWhitelistEvent.InputTuple,
      UpdateWhitelistEvent.OutputTuple,
      UpdateWhitelistEvent.OutputObject
    >;
  };
}