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

export interface L1ERC721GatewayInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "batchDepositERC721(address,address,uint256[],uint256)"
      | "batchDepositERC721(address,uint256[],uint256)"
      | "counterpart"
      | "depositERC721(address,address,uint256,uint256)"
      | "depositERC721(address,uint256,uint256)"
      | "finalizeBatchWithdrawERC721"
      | "finalizeWithdrawERC721"
      | "initialize"
      | "messenger"
      | "onDropMessage"
      | "onERC721Received"
      | "owner"
      | "renounceOwnership"
      | "router"
      | "tokenMapping"
      | "transferOwnership"
      | "updateTokenMapping"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BatchDepositERC721"
      | "BatchRefundERC721"
      | "DepositERC721"
      | "FinalizeBatchWithdrawERC721"
      | "FinalizeWithdrawERC721"
      | "Initialized"
      | "OwnershipTransferred"
      | "RefundERC721"
      | "UpdateTokenMapping"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "batchDepositERC721(address,address,uint256[],uint256)",
    values: [AddressLike, AddressLike, BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchDepositERC721(address,uint256[],uint256)",
    values: [AddressLike, BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "counterpart",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositERC721(address,address,uint256,uint256)",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositERC721(address,uint256,uint256)",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeBatchWithdrawERC721",
    values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeWithdrawERC721",
    values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "messenger", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onDropMessage",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
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
    functionFragment: "batchDepositERC721(address,address,uint256[],uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchDepositERC721(address,uint256[],uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "counterpart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositERC721(address,address,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositERC721(address,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeBatchWithdrawERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeWithdrawERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "messenger", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onDropMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
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

export namespace BatchDepositERC721Event {
  export type InputTuple = [
    _l1Token: AddressLike,
    _l2Token: AddressLike,
    _from: AddressLike,
    _to: AddressLike,
    _tokenIds: BigNumberish[]
  ];
  export type OutputTuple = [
    _l1Token: string,
    _l2Token: string,
    _from: string,
    _to: string,
    _tokenIds: bigint[]
  ];
  export interface OutputObject {
    _l1Token: string;
    _l2Token: string;
    _from: string;
    _to: string;
    _tokenIds: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BatchRefundERC721Event {
  export type InputTuple = [
    token: AddressLike,
    recipient: AddressLike,
    tokenIds: BigNumberish[]
  ];
  export type OutputTuple = [
    token: string,
    recipient: string,
    tokenIds: bigint[]
  ];
  export interface OutputObject {
    token: string;
    recipient: string;
    tokenIds: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositERC721Event {
  export type InputTuple = [
    _l1Token: AddressLike,
    _l2Token: AddressLike,
    _from: AddressLike,
    _to: AddressLike,
    _tokenId: BigNumberish
  ];
  export type OutputTuple = [
    _l1Token: string,
    _l2Token: string,
    _from: string,
    _to: string,
    _tokenId: bigint
  ];
  export interface OutputObject {
    _l1Token: string;
    _l2Token: string;
    _from: string;
    _to: string;
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FinalizeBatchWithdrawERC721Event {
  export type InputTuple = [
    _l1Token: AddressLike,
    _l2Token: AddressLike,
    _from: AddressLike,
    _to: AddressLike,
    _tokenIds: BigNumberish[]
  ];
  export type OutputTuple = [
    _l1Token: string,
    _l2Token: string,
    _from: string,
    _to: string,
    _tokenIds: bigint[]
  ];
  export interface OutputObject {
    _l1Token: string;
    _l2Token: string;
    _from: string;
    _to: string;
    _tokenIds: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FinalizeWithdrawERC721Event {
  export type InputTuple = [
    _l1Token: AddressLike,
    _l2Token: AddressLike,
    _from: AddressLike,
    _to: AddressLike,
    _tokenId: BigNumberish
  ];
  export type OutputTuple = [
    _l1Token: string,
    _l2Token: string,
    _from: string,
    _to: string,
    _tokenId: bigint
  ];
  export interface OutputObject {
    _l1Token: string;
    _l2Token: string;
    _from: string;
    _to: string;
    _tokenId: bigint;
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

export namespace RefundERC721Event {
  export type InputTuple = [
    token: AddressLike,
    recipient: AddressLike,
    tokenId: BigNumberish
  ];
  export type OutputTuple = [token: string, recipient: string, tokenId: bigint];
  export interface OutputObject {
    token: string;
    recipient: string;
    tokenId: bigint;
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

export interface L1ERC721Gateway extends BaseContract {
  connect(runner?: ContractRunner | null): L1ERC721Gateway;
  waitForDeployment(): Promise<this>;

  interface: L1ERC721GatewayInterface;

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

  "batchDepositERC721(address,address,uint256[],uint256)": TypedContractMethod<
    [
      _token: AddressLike,
      _to: AddressLike,
      _tokenIds: BigNumberish[],
      _gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  "batchDepositERC721(address,uint256[],uint256)": TypedContractMethod<
    [_token: AddressLike, _tokenIds: BigNumberish[], _gasLimit: BigNumberish],
    [void],
    "payable"
  >;

  counterpart: TypedContractMethod<[], [string], "view">;

  "depositERC721(address,address,uint256,uint256)": TypedContractMethod<
    [
      _token: AddressLike,
      _to: AddressLike,
      _tokenId: BigNumberish,
      _gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  "depositERC721(address,uint256,uint256)": TypedContractMethod<
    [_token: AddressLike, _tokenId: BigNumberish, _gasLimit: BigNumberish],
    [void],
    "payable"
  >;

  finalizeBatchWithdrawERC721: TypedContractMethod<
    [
      _l1Token: AddressLike,
      _l2Token: AddressLike,
      _from: AddressLike,
      _to: AddressLike,
      _tokenIds: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  finalizeWithdrawERC721: TypedContractMethod<
    [
      _l1Token: AddressLike,
      _l2Token: AddressLike,
      _from: AddressLike,
      _to: AddressLike,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  initialize: TypedContractMethod<
    [_counterpart: AddressLike, _messenger: AddressLike],
    [void],
    "nonpayable"
  >;

  messenger: TypedContractMethod<[], [string], "view">;

  onDropMessage: TypedContractMethod<[_message: BytesLike], [void], "payable">;

  onERC721Received: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;

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
    nameOrSignature: "batchDepositERC721(address,address,uint256[],uint256)"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _to: AddressLike,
      _tokenIds: BigNumberish[],
      _gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "batchDepositERC721(address,uint256[],uint256)"
  ): TypedContractMethod<
    [_token: AddressLike, _tokenIds: BigNumberish[], _gasLimit: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "counterpart"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "depositERC721(address,address,uint256,uint256)"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _to: AddressLike,
      _tokenId: BigNumberish,
      _gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "depositERC721(address,uint256,uint256)"
  ): TypedContractMethod<
    [_token: AddressLike, _tokenId: BigNumberish, _gasLimit: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "finalizeBatchWithdrawERC721"
  ): TypedContractMethod<
    [
      _l1Token: AddressLike,
      _l2Token: AddressLike,
      _from: AddressLike,
      _to: AddressLike,
      _tokenIds: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "finalizeWithdrawERC721"
  ): TypedContractMethod<
    [
      _l1Token: AddressLike,
      _l2Token: AddressLike,
      _from: AddressLike,
      _to: AddressLike,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [_counterpart: AddressLike, _messenger: AddressLike],
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
    nameOrSignature: "onERC721Received"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;
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
    key: "BatchDepositERC721"
  ): TypedContractEvent<
    BatchDepositERC721Event.InputTuple,
    BatchDepositERC721Event.OutputTuple,
    BatchDepositERC721Event.OutputObject
  >;
  getEvent(
    key: "BatchRefundERC721"
  ): TypedContractEvent<
    BatchRefundERC721Event.InputTuple,
    BatchRefundERC721Event.OutputTuple,
    BatchRefundERC721Event.OutputObject
  >;
  getEvent(
    key: "DepositERC721"
  ): TypedContractEvent<
    DepositERC721Event.InputTuple,
    DepositERC721Event.OutputTuple,
    DepositERC721Event.OutputObject
  >;
  getEvent(
    key: "FinalizeBatchWithdrawERC721"
  ): TypedContractEvent<
    FinalizeBatchWithdrawERC721Event.InputTuple,
    FinalizeBatchWithdrawERC721Event.OutputTuple,
    FinalizeBatchWithdrawERC721Event.OutputObject
  >;
  getEvent(
    key: "FinalizeWithdrawERC721"
  ): TypedContractEvent<
    FinalizeWithdrawERC721Event.InputTuple,
    FinalizeWithdrawERC721Event.OutputTuple,
    FinalizeWithdrawERC721Event.OutputObject
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
    key: "RefundERC721"
  ): TypedContractEvent<
    RefundERC721Event.InputTuple,
    RefundERC721Event.OutputTuple,
    RefundERC721Event.OutputObject
  >;
  getEvent(
    key: "UpdateTokenMapping"
  ): TypedContractEvent<
    UpdateTokenMappingEvent.InputTuple,
    UpdateTokenMappingEvent.OutputTuple,
    UpdateTokenMappingEvent.OutputObject
  >;

  filters: {
    "BatchDepositERC721(address,address,address,address,uint256[])": TypedContractEvent<
      BatchDepositERC721Event.InputTuple,
      BatchDepositERC721Event.OutputTuple,
      BatchDepositERC721Event.OutputObject
    >;
    BatchDepositERC721: TypedContractEvent<
      BatchDepositERC721Event.InputTuple,
      BatchDepositERC721Event.OutputTuple,
      BatchDepositERC721Event.OutputObject
    >;

    "BatchRefundERC721(address,address,uint256[])": TypedContractEvent<
      BatchRefundERC721Event.InputTuple,
      BatchRefundERC721Event.OutputTuple,
      BatchRefundERC721Event.OutputObject
    >;
    BatchRefundERC721: TypedContractEvent<
      BatchRefundERC721Event.InputTuple,
      BatchRefundERC721Event.OutputTuple,
      BatchRefundERC721Event.OutputObject
    >;

    "DepositERC721(address,address,address,address,uint256)": TypedContractEvent<
      DepositERC721Event.InputTuple,
      DepositERC721Event.OutputTuple,
      DepositERC721Event.OutputObject
    >;
    DepositERC721: TypedContractEvent<
      DepositERC721Event.InputTuple,
      DepositERC721Event.OutputTuple,
      DepositERC721Event.OutputObject
    >;

    "FinalizeBatchWithdrawERC721(address,address,address,address,uint256[])": TypedContractEvent<
      FinalizeBatchWithdrawERC721Event.InputTuple,
      FinalizeBatchWithdrawERC721Event.OutputTuple,
      FinalizeBatchWithdrawERC721Event.OutputObject
    >;
    FinalizeBatchWithdrawERC721: TypedContractEvent<
      FinalizeBatchWithdrawERC721Event.InputTuple,
      FinalizeBatchWithdrawERC721Event.OutputTuple,
      FinalizeBatchWithdrawERC721Event.OutputObject
    >;

    "FinalizeWithdrawERC721(address,address,address,address,uint256)": TypedContractEvent<
      FinalizeWithdrawERC721Event.InputTuple,
      FinalizeWithdrawERC721Event.OutputTuple,
      FinalizeWithdrawERC721Event.OutputObject
    >;
    FinalizeWithdrawERC721: TypedContractEvent<
      FinalizeWithdrawERC721Event.InputTuple,
      FinalizeWithdrawERC721Event.OutputTuple,
      FinalizeWithdrawERC721Event.OutputObject
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

    "RefundERC721(address,address,uint256)": TypedContractEvent<
      RefundERC721Event.InputTuple,
      RefundERC721Event.OutputTuple,
      RefundERC721Event.OutputObject
    >;
    RefundERC721: TypedContractEvent<
      RefundERC721Event.InputTuple,
      RefundERC721Event.OutputTuple,
      RefundERC721Event.OutputObject
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