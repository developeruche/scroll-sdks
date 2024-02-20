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

export interface L2CustomERC20GatewayInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "counterpart"
      | "finalizeDepositERC20"
      | "getL1ERC20Address"
      | "getL2ERC20Address"
      | "initialize"
      | "messenger"
      | "owner"
      | "renounceOwnership"
      | "router"
      | "tokenMapping"
      | "transferOwnership"
      | "updateTokenMapping"
      | "withdrawERC20(address,uint256,uint256)"
      | "withdrawERC20(address,address,uint256,uint256)"
      | "withdrawERC20AndCall"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FinalizeDepositERC20"
      | "Initialized"
      | "OwnershipTransferred"
      | "UpdateTokenMapping"
      | "WithdrawERC20"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "counterpart",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeDepositERC20",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getL1ERC20Address",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getL2ERC20Address",
    values: [AddressLike]
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
    functionFragment: "tokenMapping",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTokenMapping",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC20(address,uint256,uint256)",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC20(address,address,uint256,uint256)",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC20AndCall",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "counterpart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeDepositERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getL1ERC20Address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getL2ERC20Address",
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
    functionFragment: "tokenMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTokenMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC20(address,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC20(address,address,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC20AndCall",
    data: BytesLike
  ): Result;
}

export namespace FinalizeDepositERC20Event {
  export type InputTuple = [
    l1Token: AddressLike,
    l2Token: AddressLike,
    from: AddressLike,
    to: AddressLike,
    amount: BigNumberish,
    data: BytesLike
  ];
  export type OutputTuple = [
    l1Token: string,
    l2Token: string,
    from: string,
    to: string,
    amount: bigint,
    data: string
  ];
  export interface OutputObject {
    l1Token: string;
    l2Token: string;
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

export namespace UpdateTokenMappingEvent {
  export type InputTuple = [
    l2Token: AddressLike,
    oldL1Token: AddressLike,
    newL1Token: AddressLike
  ];
  export type OutputTuple = [
    l2Token: string,
    oldL1Token: string,
    newL1Token: string
  ];
  export interface OutputObject {
    l2Token: string;
    oldL1Token: string;
    newL1Token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawERC20Event {
  export type InputTuple = [
    l1Token: AddressLike,
    l2Token: AddressLike,
    from: AddressLike,
    to: AddressLike,
    amount: BigNumberish,
    data: BytesLike
  ];
  export type OutputTuple = [
    l1Token: string,
    l2Token: string,
    from: string,
    to: string,
    amount: bigint,
    data: string
  ];
  export interface OutputObject {
    l1Token: string;
    l2Token: string;
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

export interface L2CustomERC20Gateway extends BaseContract {
  connect(runner?: ContractRunner | null): L2CustomERC20Gateway;
  waitForDeployment(): Promise<this>;

  interface: L2CustomERC20GatewayInterface;

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

  finalizeDepositERC20: TypedContractMethod<
    [
      _l1Token: AddressLike,
      _l2Token: AddressLike,
      _from: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "payable"
  >;

  getL1ERC20Address: TypedContractMethod<
    [_l2Token: AddressLike],
    [string],
    "view"
  >;

  getL2ERC20Address: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  initialize: TypedContractMethod<
    [_counterpart: AddressLike, _router: AddressLike, _messenger: AddressLike],
    [void],
    "nonpayable"
  >;

  messenger: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  router: TypedContractMethod<[], [string], "view">;

  tokenMapping: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  updateTokenMapping: TypedContractMethod<
    [_l2Token: AddressLike, _l1Token: AddressLike],
    [void],
    "nonpayable"
  >;

  "withdrawERC20(address,uint256,uint256)": TypedContractMethod<
    [_token: AddressLike, _amount: BigNumberish, _gasLimit: BigNumberish],
    [void],
    "payable"
  >;

  "withdrawERC20(address,address,uint256,uint256)": TypedContractMethod<
    [
      _token: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  withdrawERC20AndCall: TypedContractMethod<
    [
      _token: AddressLike,
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
    nameOrSignature: "finalizeDepositERC20"
  ): TypedContractMethod<
    [
      _l1Token: AddressLike,
      _l2Token: AddressLike,
      _from: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getL1ERC20Address"
  ): TypedContractMethod<[_l2Token: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getL2ERC20Address"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
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
    nameOrSignature: "tokenMapping"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateTokenMapping"
  ): TypedContractMethod<
    [_l2Token: AddressLike, _l1Token: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawERC20(address,uint256,uint256)"
  ): TypedContractMethod<
    [_token: AddressLike, _amount: BigNumberish, _gasLimit: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "withdrawERC20(address,address,uint256,uint256)"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "withdrawERC20AndCall"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _data: BytesLike,
      _gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  getEvent(
    key: "FinalizeDepositERC20"
  ): TypedContractEvent<
    FinalizeDepositERC20Event.InputTuple,
    FinalizeDepositERC20Event.OutputTuple,
    FinalizeDepositERC20Event.OutputObject
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
    key: "UpdateTokenMapping"
  ): TypedContractEvent<
    UpdateTokenMappingEvent.InputTuple,
    UpdateTokenMappingEvent.OutputTuple,
    UpdateTokenMappingEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawERC20"
  ): TypedContractEvent<
    WithdrawERC20Event.InputTuple,
    WithdrawERC20Event.OutputTuple,
    WithdrawERC20Event.OutputObject
  >;

  filters: {
    "FinalizeDepositERC20(address,address,address,address,uint256,bytes)": TypedContractEvent<
      FinalizeDepositERC20Event.InputTuple,
      FinalizeDepositERC20Event.OutputTuple,
      FinalizeDepositERC20Event.OutputObject
    >;
    FinalizeDepositERC20: TypedContractEvent<
      FinalizeDepositERC20Event.InputTuple,
      FinalizeDepositERC20Event.OutputTuple,
      FinalizeDepositERC20Event.OutputObject
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

    "UpdateTokenMapping(address,address,address)": TypedContractEvent<
      UpdateTokenMappingEvent.InputTuple,
      UpdateTokenMappingEvent.OutputTuple,
      UpdateTokenMappingEvent.OutputObject
    >;
    UpdateTokenMapping: TypedContractEvent<
      UpdateTokenMappingEvent.InputTuple,
      UpdateTokenMappingEvent.OutputTuple,
      UpdateTokenMappingEvent.OutputObject
    >;

    "WithdrawERC20(address,address,address,address,uint256,bytes)": TypedContractEvent<
      WithdrawERC20Event.InputTuple,
      WithdrawERC20Event.OutputTuple,
      WithdrawERC20Event.OutputObject
    >;
    WithdrawERC20: TypedContractEvent<
      WithdrawERC20Event.InputTuple,
      WithdrawERC20Event.OutputTuple,
      WithdrawERC20Event.OutputObject
    >;
  };
}
