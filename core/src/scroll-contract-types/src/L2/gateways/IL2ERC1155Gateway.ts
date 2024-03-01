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

export interface IL2ERC1155GatewayInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "batchWithdrawERC1155(address,uint256[],uint256[],uint256)"
      | "batchWithdrawERC1155(address,address,uint256[],uint256[],uint256)"
      | "finalizeBatchDepositERC1155"
      | "finalizeDepositERC1155"
      | "withdrawERC1155(address,uint256,uint256,uint256)"
      | "withdrawERC1155(address,address,uint256,uint256,uint256)"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BatchWithdrawERC1155"
      | "FinalizeBatchDepositERC1155"
      | "FinalizeDepositERC1155"
      | "WithdrawERC1155"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "batchWithdrawERC1155(address,uint256[],uint256[],uint256)",
    values: [AddressLike, BigNumberish[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchWithdrawERC1155(address,address,uint256[],uint256[],uint256)",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeBatchDepositERC1155",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeDepositERC1155",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC1155(address,uint256,uint256,uint256)",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC1155(address,address,uint256,uint256,uint256)",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchWithdrawERC1155(address,uint256[],uint256[],uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchWithdrawERC1155(address,address,uint256[],uint256[],uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeBatchDepositERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeDepositERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC1155(address,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC1155(address,address,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
}

export namespace BatchWithdrawERC1155Event {
  export type InputTuple = [
    l1Token: AddressLike,
    l2Token: AddressLike,
    from: AddressLike,
    to: AddressLike,
    tokenIds: BigNumberish[],
    amounts: BigNumberish[]
  ];
  export type OutputTuple = [
    l1Token: string,
    l2Token: string,
    from: string,
    to: string,
    tokenIds: bigint[],
    amounts: bigint[]
  ];
  export interface OutputObject {
    l1Token: string;
    l2Token: string;
    from: string;
    to: string;
    tokenIds: bigint[];
    amounts: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FinalizeBatchDepositERC1155Event {
  export type InputTuple = [
    l1Token: AddressLike,
    l2Token: AddressLike,
    from: AddressLike,
    to: AddressLike,
    tokenIds: BigNumberish[],
    amounts: BigNumberish[]
  ];
  export type OutputTuple = [
    l1Token: string,
    l2Token: string,
    from: string,
    to: string,
    tokenIds: bigint[],
    amounts: bigint[]
  ];
  export interface OutputObject {
    l1Token: string;
    l2Token: string;
    from: string;
    to: string;
    tokenIds: bigint[];
    amounts: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FinalizeDepositERC1155Event {
  export type InputTuple = [
    l1Token: AddressLike,
    l2Token: AddressLike,
    from: AddressLike,
    to: AddressLike,
    tokenId: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    l1Token: string,
    l2Token: string,
    from: string,
    to: string,
    tokenId: bigint,
    amount: bigint
  ];
  export interface OutputObject {
    l1Token: string;
    l2Token: string;
    from: string;
    to: string;
    tokenId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawERC1155Event {
  export type InputTuple = [
    l1Token: AddressLike,
    l2Token: AddressLike,
    from: AddressLike,
    to: AddressLike,
    tokenId: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    l1Token: string,
    l2Token: string,
    from: string,
    to: string,
    tokenId: bigint,
    amount: bigint
  ];
  export interface OutputObject {
    l1Token: string;
    l2Token: string;
    from: string;
    to: string;
    tokenId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IL2ERC1155Gateway extends BaseContract {
  connect(runner?: ContractRunner | null): IL2ERC1155Gateway;
  waitForDeployment(): Promise<this>;

  interface: IL2ERC1155GatewayInterface;

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

  "batchWithdrawERC1155(address,uint256[],uint256[],uint256)": TypedContractMethod<
    [
      token: AddressLike,
      tokenIds: BigNumberish[],
      amounts: BigNumberish[],
      gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  "batchWithdrawERC1155(address,address,uint256[],uint256[],uint256)": TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      tokenIds: BigNumberish[],
      amounts: BigNumberish[],
      gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  finalizeBatchDepositERC1155: TypedContractMethod<
    [
      l1Token: AddressLike,
      l2Token: AddressLike,
      from: AddressLike,
      to: AddressLike,
      tokenIds: BigNumberish[],
      amounts: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  finalizeDepositERC1155: TypedContractMethod<
    [
      l1Token: AddressLike,
      l2Token: AddressLike,
      from: AddressLike,
      to: AddressLike,
      tokenId: BigNumberish,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  "withdrawERC1155(address,uint256,uint256,uint256)": TypedContractMethod<
    [
      token: AddressLike,
      tokenId: BigNumberish,
      amount: BigNumberish,
      gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  "withdrawERC1155(address,address,uint256,uint256,uint256)": TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      tokenId: BigNumberish,
      amount: BigNumberish,
      gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "batchWithdrawERC1155(address,uint256[],uint256[],uint256)"
  ): TypedContractMethod<
    [
      token: AddressLike,
      tokenIds: BigNumberish[],
      amounts: BigNumberish[],
      gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "batchWithdrawERC1155(address,address,uint256[],uint256[],uint256)"
  ): TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      tokenIds: BigNumberish[],
      amounts: BigNumberish[],
      gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "finalizeBatchDepositERC1155"
  ): TypedContractMethod<
    [
      l1Token: AddressLike,
      l2Token: AddressLike,
      from: AddressLike,
      to: AddressLike,
      tokenIds: BigNumberish[],
      amounts: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "finalizeDepositERC1155"
  ): TypedContractMethod<
    [
      l1Token: AddressLike,
      l2Token: AddressLike,
      from: AddressLike,
      to: AddressLike,
      tokenId: BigNumberish,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawERC1155(address,uint256,uint256,uint256)"
  ): TypedContractMethod<
    [
      token: AddressLike,
      tokenId: BigNumberish,
      amount: BigNumberish,
      gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "withdrawERC1155(address,address,uint256,uint256,uint256)"
  ): TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      tokenId: BigNumberish,
      amount: BigNumberish,
      gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  getEvent(
    key: "BatchWithdrawERC1155"
  ): TypedContractEvent<
    BatchWithdrawERC1155Event.InputTuple,
    BatchWithdrawERC1155Event.OutputTuple,
    BatchWithdrawERC1155Event.OutputObject
  >;
  getEvent(
    key: "FinalizeBatchDepositERC1155"
  ): TypedContractEvent<
    FinalizeBatchDepositERC1155Event.InputTuple,
    FinalizeBatchDepositERC1155Event.OutputTuple,
    FinalizeBatchDepositERC1155Event.OutputObject
  >;
  getEvent(
    key: "FinalizeDepositERC1155"
  ): TypedContractEvent<
    FinalizeDepositERC1155Event.InputTuple,
    FinalizeDepositERC1155Event.OutputTuple,
    FinalizeDepositERC1155Event.OutputObject
  >;
  getEvent(
    key: "WithdrawERC1155"
  ): TypedContractEvent<
    WithdrawERC1155Event.InputTuple,
    WithdrawERC1155Event.OutputTuple,
    WithdrawERC1155Event.OutputObject
  >;

  filters: {
    "BatchWithdrawERC1155(address,address,address,address,uint256[],uint256[])": TypedContractEvent<
      BatchWithdrawERC1155Event.InputTuple,
      BatchWithdrawERC1155Event.OutputTuple,
      BatchWithdrawERC1155Event.OutputObject
    >;
    BatchWithdrawERC1155: TypedContractEvent<
      BatchWithdrawERC1155Event.InputTuple,
      BatchWithdrawERC1155Event.OutputTuple,
      BatchWithdrawERC1155Event.OutputObject
    >;

    "FinalizeBatchDepositERC1155(address,address,address,address,uint256[],uint256[])": TypedContractEvent<
      FinalizeBatchDepositERC1155Event.InputTuple,
      FinalizeBatchDepositERC1155Event.OutputTuple,
      FinalizeBatchDepositERC1155Event.OutputObject
    >;
    FinalizeBatchDepositERC1155: TypedContractEvent<
      FinalizeBatchDepositERC1155Event.InputTuple,
      FinalizeBatchDepositERC1155Event.OutputTuple,
      FinalizeBatchDepositERC1155Event.OutputObject
    >;

    "FinalizeDepositERC1155(address,address,address,address,uint256,uint256)": TypedContractEvent<
      FinalizeDepositERC1155Event.InputTuple,
      FinalizeDepositERC1155Event.OutputTuple,
      FinalizeDepositERC1155Event.OutputObject
    >;
    FinalizeDepositERC1155: TypedContractEvent<
      FinalizeDepositERC1155Event.InputTuple,
      FinalizeDepositERC1155Event.OutputTuple,
      FinalizeDepositERC1155Event.OutputObject
    >;

    "WithdrawERC1155(address,address,address,address,uint256,uint256)": TypedContractEvent<
      WithdrawERC1155Event.InputTuple,
      WithdrawERC1155Event.OutputTuple,
      WithdrawERC1155Event.OutputObject
    >;
    WithdrawERC1155: TypedContractEvent<
      WithdrawERC1155Event.InputTuple,
      WithdrawERC1155Event.OutputTuple,
      WithdrawERC1155Event.OutputObject
    >;
  };
}