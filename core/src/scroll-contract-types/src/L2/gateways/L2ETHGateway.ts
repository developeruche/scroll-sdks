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

export interface L2ETHGatewayInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "counterpart"
      | "finalizeDepositETH"
      | "initialize"
      | "messenger"
      | "owner"
      | "renounceOwnership"
      | "router"
      | "transferOwnership"
      | "withdrawETH(address,uint256,uint256)"
      | "withdrawETH(uint256,uint256)"
      | "withdrawETHAndCall"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FinalizeDepositETH"
      | "Initialized"
      | "OwnershipTransferred"
      | "WithdrawETH"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "counterpart",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeDepositETH",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "messenger", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETH(address,uint256,uint256)",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETH(uint256,uint256)",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETHAndCall",
    values: [AddressLike, BigNumberish, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "counterpart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeDepositETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "messenger", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETH(address,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETH(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETHAndCall",
    data: BytesLike
  ): Result;
}

export namespace FinalizeDepositETHEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    amount: BigNumberish,
    data: BytesLike
  ];
  export type OutputTuple = [
    from: string,
    to: string,
    amount: bigint,
    data: string
  ];
  export interface OutputObject {
    from: string;
    to: string;
    amount: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace WithdrawETHEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    amount: BigNumberish,
    data: BytesLike
  ];
  export type OutputTuple = [
    from: string,
    to: string,
    amount: bigint,
    data: string
  ];
  export interface OutputObject {
    from: string;
    to: string;
    amount: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface L2ETHGateway extends BaseContract {
  connect(runner?: ContractRunner | null): L2ETHGateway;
  waitForDeployment(): Promise<this>;

  interface: L2ETHGatewayInterface;

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

  counterpart: TypedContractMethod<[], [string], "view">;

  finalizeDepositETH: TypedContractMethod<
    [
      _from: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "payable"
  >;

  initialize: TypedContractMethod<
    [_counterpart: AddressLike, _router: AddressLike, _messenger: AddressLike],
    [void],
    "nonpayable"
  >;

  messenger: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  router: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  "withdrawETH(address,uint256,uint256)": TypedContractMethod<
    [_to: AddressLike, _amount: BigNumberish, _gasLimit: BigNumberish],
    [void],
    "payable"
  >;

  "withdrawETH(uint256,uint256)": TypedContractMethod<
    [_amount: BigNumberish, _gasLimit: BigNumberish],
    [void],
    "payable"
  >;

  withdrawETHAndCall: TypedContractMethod<
    [
      _to: AddressLike,
      _amount: BigNumberish,
      _data: BytesLike,
      _gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "counterpart"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "finalizeDepositETH"
  ): TypedContractMethod<
    [
      _from: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [_counterpart: AddressLike, _router: AddressLike, _messenger: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "messenger"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "router"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawETH(address,uint256,uint256)"
  ): TypedContractMethod<
    [_to: AddressLike, _amount: BigNumberish, _gasLimit: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "withdrawETH(uint256,uint256)"
  ): TypedContractMethod<
    [_amount: BigNumberish, _gasLimit: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "withdrawETHAndCall"
  ): TypedContractMethod<
    [
      _to: AddressLike,
      _amount: BigNumberish,
      _data: BytesLike,
      _gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  getEvent(
    key: "FinalizeDepositETH"
  ): TypedContractEvent<
    FinalizeDepositETHEvent.InputTuple,
    FinalizeDepositETHEvent.OutputTuple,
    FinalizeDepositETHEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawETH"
  ): TypedContractEvent<
    WithdrawETHEvent.InputTuple,
    WithdrawETHEvent.OutputTuple,
    WithdrawETHEvent.OutputObject
  >;

  filters: {
    "FinalizeDepositETH(address,address,uint256,bytes)": TypedContractEvent<
      FinalizeDepositETHEvent.InputTuple,
      FinalizeDepositETHEvent.OutputTuple,
      FinalizeDepositETHEvent.OutputObject
    >;
    FinalizeDepositETH: TypedContractEvent<
      FinalizeDepositETHEvent.InputTuple,
      FinalizeDepositETHEvent.OutputTuple,
      FinalizeDepositETHEvent.OutputObject
    >;

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

    "WithdrawETH(address,address,uint256,bytes)": TypedContractEvent<
      WithdrawETHEvent.InputTuple,
      WithdrawETHEvent.OutputTuple,
      WithdrawETHEvent.OutputObject
    >;
    WithdrawETH: TypedContractEvent<
      WithdrawETHEvent.InputTuple,
      WithdrawETHEvent.OutputTuple,
      WithdrawETHEvent.OutputObject
    >;
  };
}