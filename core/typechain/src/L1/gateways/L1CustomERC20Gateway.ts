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

export interface L1CustomERC20GatewayInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "counterpart"
      | "depositERC20(address,uint256,uint256)"
      | "depositERC20(address,address,uint256,uint256)"
      | "depositERC20AndCall"
      | "finalizeWithdrawERC20"
      | "getL2ERC20Address"
      | "initialize"
      | "messenger"
      | "onDropMessage"
      | "owner"
      | "renounceOwnership"
      | "router"
      | "tokenMapping"
      | "transferOwnership"
      | "updateTokenMapping"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DepositERC20"
      | "FinalizeWithdrawERC20"
      | "Initialized"
      | "OwnershipTransferred"
      | "RefundERC20"
      | "UpdateTokenMapping"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "counterpart",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositERC20(address,uint256,uint256)",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositERC20(address,address,uint256,uint256)",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositERC20AndCall",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeWithdrawERC20",
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
    functionFragment: "getL2ERC20Address",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "messenger", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onDropMessage",
    values: [BytesLike]
  ): string;
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

  decodeFunctionResult(
    functionFragment: "counterpart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositERC20(address,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositERC20(address,address,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositERC20AndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeWithdrawERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getL2ERC20Address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "messenger", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onDropMessage",
    data: BytesLike
  ): Result;
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
}

export namespace DepositERC20Event {
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

export namespace FinalizeWithdrawERC20Event {
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

export namespace RefundERC20Event {
  export type InputTuple = [
    token: AddressLike,
    recipient: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [token: string, recipient: string, amount: bigint];
  export interface OutputObject {
    token: string;
    recipient: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdateTokenMappingEvent {
  export type InputTuple = [
    l1Token: AddressLike,
    oldL2Token: AddressLike,
    newL2Token: AddressLike
  ];
  export type OutputTuple = [
    l1Token: string,
    oldL2Token: string,
    newL2Token: string
  ];
  export interface OutputObject {
    l1Token: string;
    oldL2Token: string;
    newL2Token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface L1CustomERC20Gateway extends BaseContract {
  connect(runner?: ContractRunner | null): L1CustomERC20Gateway;
  waitForDeployment(): Promise<this>;

  interface: L1CustomERC20GatewayInterface;

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

  "depositERC20(address,uint256,uint256)": TypedContractMethod<
    [_token: AddressLike, _amount: BigNumberish, _gasLimit: BigNumberish],
    [void],
    "payable"
  >;

  "depositERC20(address,address,uint256,uint256)": TypedContractMethod<
    [
      _token: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  depositERC20AndCall: TypedContractMethod<
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

  finalizeWithdrawERC20: TypedContractMethod<
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

  getL2ERC20Address: TypedContractMethod<
    [_l1Token: AddressLike],
    [string],
    "view"
  >;

  initialize: TypedContractMethod<
    [_counterpart: AddressLike, _router: AddressLike, _messenger: AddressLike],
    [void],
    "nonpayable"
  >;

  messenger: TypedContractMethod<[], [string], "view">;

  onDropMessage: TypedContractMethod<[_message: BytesLike], [void], "payable">;

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
    [_l1Token: AddressLike, _l2Token: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "counterpart"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "depositERC20(address,uint256,uint256)"
  ): TypedContractMethod<
    [_token: AddressLike, _amount: BigNumberish, _gasLimit: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "depositERC20(address,address,uint256,uint256)"
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
    nameOrSignature: "depositERC20AndCall"
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
  getFunction(
    nameOrSignature: "finalizeWithdrawERC20"
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
    nameOrSignature: "getL2ERC20Address"
  ): TypedContractMethod<[_l1Token: AddressLike], [string], "view">;
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
    nameOrSignature: "onDropMessage"
  ): TypedContractMethod<[_message: BytesLike], [void], "payable">;
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
    [_l1Token: AddressLike, _l2Token: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "DepositERC20"
  ): TypedContractEvent<
    DepositERC20Event.InputTuple,
    DepositERC20Event.OutputTuple,
    DepositERC20Event.OutputObject
  >;
  getEvent(
    key: "FinalizeWithdrawERC20"
  ): TypedContractEvent<
    FinalizeWithdrawERC20Event.InputTuple,
    FinalizeWithdrawERC20Event.OutputTuple,
    FinalizeWithdrawERC20Event.OutputObject
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
    key: "RefundERC20"
  ): TypedContractEvent<
    RefundERC20Event.InputTuple,
    RefundERC20Event.OutputTuple,
    RefundERC20Event.OutputObject
  >;
  getEvent(
    key: "UpdateTokenMapping"
  ): TypedContractEvent<
    UpdateTokenMappingEvent.InputTuple,
    UpdateTokenMappingEvent.OutputTuple,
    UpdateTokenMappingEvent.OutputObject
  >;

  filters: {
    "DepositERC20(address,address,address,address,uint256,bytes)": TypedContractEvent<
      DepositERC20Event.InputTuple,
      DepositERC20Event.OutputTuple,
      DepositERC20Event.OutputObject
    >;
    DepositERC20: TypedContractEvent<
      DepositERC20Event.InputTuple,
      DepositERC20Event.OutputTuple,
      DepositERC20Event.OutputObject
    >;

    "FinalizeWithdrawERC20(address,address,address,address,uint256,bytes)": TypedContractEvent<
      FinalizeWithdrawERC20Event.InputTuple,
      FinalizeWithdrawERC20Event.OutputTuple,
      FinalizeWithdrawERC20Event.OutputObject
    >;
    FinalizeWithdrawERC20: TypedContractEvent<
      FinalizeWithdrawERC20Event.InputTuple,
      FinalizeWithdrawERC20Event.OutputTuple,
      FinalizeWithdrawERC20Event.OutputObject
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

    "RefundERC20(address,address,uint256)": TypedContractEvent<
      RefundERC20Event.InputTuple,
      RefundERC20Event.OutputTuple,
      RefundERC20Event.OutputObject
    >;
    RefundERC20: TypedContractEvent<
      RefundERC20Event.InputTuple,
      RefundERC20Event.OutputTuple,
      RefundERC20Event.OutputObject
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
  };
}
