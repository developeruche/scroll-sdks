/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IMessageTransmitterInterface extends Interface {
  getFunction(
    nameOrSignature: "receiveMessage" | "usedNonces"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "receiveMessage",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "usedNonces",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "receiveMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usedNonces", data: BytesLike): Result;
}

export interface IMessageTransmitter extends BaseContract {
  connect(runner?: ContractRunner | null): IMessageTransmitter;
  waitForDeployment(): Promise<this>;

  interface: IMessageTransmitterInterface;

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

  receiveMessage: TypedContractMethod<
    [message: BytesLike, signature: BytesLike],
    [boolean],
    "nonpayable"
  >;

  usedNonces: TypedContractMethod<
    [_sourceAndNonce: BytesLike],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "receiveMessage"
  ): TypedContractMethod<
    [message: BytesLike, signature: BytesLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "usedNonces"
  ): TypedContractMethod<[_sourceAndNonce: BytesLike], [bigint], "view">;

  filters: {};
}
