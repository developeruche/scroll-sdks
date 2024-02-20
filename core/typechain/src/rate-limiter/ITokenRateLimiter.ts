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
} from "../../common";

export interface ITokenRateLimiterInterface extends Interface {
  getFunction(nameOrSignature: "addUsedAmount"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "UpdateTotalLimit"): EventFragment;

  encodeFunctionData(
    functionFragment: "addUsedAmount",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addUsedAmount",
    data: BytesLike
  ): Result;
}

export namespace UpdateTotalLimitEvent {
  export type InputTuple = [
    token: AddressLike,
    oldTotalLimit: BigNumberish,
    newTotalLimit: BigNumberish
  ];
  export type OutputTuple = [
    token: string,
    oldTotalLimit: bigint,
    newTotalLimit: bigint
  ];
  export interface OutputObject {
    token: string;
    oldTotalLimit: bigint;
    newTotalLimit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ITokenRateLimiter extends BaseContract {
  connect(runner?: ContractRunner | null): ITokenRateLimiter;
  waitForDeployment(): Promise<this>;

  interface: ITokenRateLimiterInterface;

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

  addUsedAmount: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addUsedAmount"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "UpdateTotalLimit"
  ): TypedContractEvent<
    UpdateTotalLimitEvent.InputTuple,
    UpdateTotalLimitEvent.OutputTuple,
    UpdateTotalLimitEvent.OutputObject
  >;

  filters: {
    "UpdateTotalLimit(address,uint256,uint256)": TypedContractEvent<
      UpdateTotalLimitEvent.InputTuple,
      UpdateTotalLimitEvent.OutputTuple,
      UpdateTotalLimitEvent.OutputObject
    >;
    UpdateTotalLimit: TypedContractEvent<
      UpdateTotalLimitEvent.InputTuple,
      UpdateTotalLimitEvent.OutputTuple,
      UpdateTotalLimitEvent.OutputObject
    >;
  };
}
