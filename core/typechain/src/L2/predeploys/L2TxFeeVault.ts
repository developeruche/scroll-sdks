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

export interface L2TxFeeVaultInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "messenger"
      | "minWithdrawAmount"
      | "owner"
      | "recipient"
      | "renounceOwnership"
      | "totalProcessed"
      | "transferOwnership"
      | "updateMessenger"
      | "updateMinWithdrawAmount"
      | "updateRecipient"
      | "withdraw(uint256)"
      | "withdraw()"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "OwnershipTransferred"
      | "UpdateMessenger"
      | "UpdateMinWithdrawAmount"
      | "UpdateRecipient"
      | "Withdrawal"
  ): EventFragment;

  encodeFunctionData(functionFragment: "messenger", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minWithdrawAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "recipient", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalProcessed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMessenger",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMinWithdrawAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRecipient",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw()",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "messenger", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minWithdrawAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalProcessed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMessenger",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMinWithdrawAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw()", data: BytesLike): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [_oldOwner: AddressLike, _newOwner: AddressLike];
  export type OutputTuple = [_oldOwner: string, _newOwner: string];
  export interface OutputObject {
    _oldOwner: string;
    _newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdateMessengerEvent {
  export type InputTuple = [
    oldMessenger: AddressLike,
    newMessenger: AddressLike
  ];
  export type OutputTuple = [oldMessenger: string, newMessenger: string];
  export interface OutputObject {
    oldMessenger: string;
    newMessenger: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdateMinWithdrawAmountEvent {
  export type InputTuple = [
    oldMinWithdrawAmount: BigNumberish,
    newMinWithdrawAmount: BigNumberish
  ];
  export type OutputTuple = [
    oldMinWithdrawAmount: bigint,
    newMinWithdrawAmount: bigint
  ];
  export interface OutputObject {
    oldMinWithdrawAmount: bigint;
    newMinWithdrawAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdateRecipientEvent {
  export type InputTuple = [
    oldRecipient: AddressLike,
    newRecipient: AddressLike
  ];
  export type OutputTuple = [oldRecipient: string, newRecipient: string];
  export interface OutputObject {
    oldRecipient: string;
    newRecipient: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawalEvent {
  export type InputTuple = [
    value: BigNumberish,
    to: AddressLike,
    from: AddressLike
  ];
  export type OutputTuple = [value: bigint, to: string, from: string];
  export interface OutputObject {
    value: bigint;
    to: string;
    from: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface L2TxFeeVault extends BaseContract {
  connect(runner?: ContractRunner | null): L2TxFeeVault;
  waitForDeployment(): Promise<this>;

  interface: L2TxFeeVaultInterface;

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

  messenger: TypedContractMethod<[], [string], "view">;

  minWithdrawAmount: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  recipient: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  totalProcessed: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [_newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  updateMessenger: TypedContractMethod<
    [_newMessenger: AddressLike],
    [void],
    "nonpayable"
  >;

  updateMinWithdrawAmount: TypedContractMethod<
    [_newMinWithdrawAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateRecipient: TypedContractMethod<
    [_newRecipient: AddressLike],
    [void],
    "nonpayable"
  >;

  "withdraw(uint256)": TypedContractMethod<
    [_value: BigNumberish],
    [void],
    "nonpayable"
  >;

  "withdraw()": TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "messenger"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "minWithdrawAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "recipient"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "totalProcessed"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[_newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateMessenger"
  ): TypedContractMethod<[_newMessenger: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateMinWithdrawAmount"
  ): TypedContractMethod<
    [_newMinWithdrawAmount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateRecipient"
  ): TypedContractMethod<[_newRecipient: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw(uint256)"
  ): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw()"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "UpdateMessenger"
  ): TypedContractEvent<
    UpdateMessengerEvent.InputTuple,
    UpdateMessengerEvent.OutputTuple,
    UpdateMessengerEvent.OutputObject
  >;
  getEvent(
    key: "UpdateMinWithdrawAmount"
  ): TypedContractEvent<
    UpdateMinWithdrawAmountEvent.InputTuple,
    UpdateMinWithdrawAmountEvent.OutputTuple,
    UpdateMinWithdrawAmountEvent.OutputObject
  >;
  getEvent(
    key: "UpdateRecipient"
  ): TypedContractEvent<
    UpdateRecipientEvent.InputTuple,
    UpdateRecipientEvent.OutputTuple,
    UpdateRecipientEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawal"
  ): TypedContractEvent<
    WithdrawalEvent.InputTuple,
    WithdrawalEvent.OutputTuple,
    WithdrawalEvent.OutputObject
  >;

  filters: {
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

    "UpdateMessenger(address,address)": TypedContractEvent<
      UpdateMessengerEvent.InputTuple,
      UpdateMessengerEvent.OutputTuple,
      UpdateMessengerEvent.OutputObject
    >;
    UpdateMessenger: TypedContractEvent<
      UpdateMessengerEvent.InputTuple,
      UpdateMessengerEvent.OutputTuple,
      UpdateMessengerEvent.OutputObject
    >;

    "UpdateMinWithdrawAmount(uint256,uint256)": TypedContractEvent<
      UpdateMinWithdrawAmountEvent.InputTuple,
      UpdateMinWithdrawAmountEvent.OutputTuple,
      UpdateMinWithdrawAmountEvent.OutputObject
    >;
    UpdateMinWithdrawAmount: TypedContractEvent<
      UpdateMinWithdrawAmountEvent.InputTuple,
      UpdateMinWithdrawAmountEvent.OutputTuple,
      UpdateMinWithdrawAmountEvent.OutputObject
    >;

    "UpdateRecipient(address,address)": TypedContractEvent<
      UpdateRecipientEvent.InputTuple,
      UpdateRecipientEvent.OutputTuple,
      UpdateRecipientEvent.OutputObject
    >;
    UpdateRecipient: TypedContractEvent<
      UpdateRecipientEvent.InputTuple,
      UpdateRecipientEvent.OutputTuple,
      UpdateRecipientEvent.OutputObject
    >;

    "Withdrawal(uint256,address,address)": TypedContractEvent<
      WithdrawalEvent.InputTuple,
      WithdrawalEvent.OutputTuple,
      WithdrawalEvent.OutputObject
    >;
    Withdrawal: TypedContractEvent<
      WithdrawalEvent.InputTuple,
      WithdrawalEvent.OutputTuple,
      WithdrawalEvent.OutputObject
    >;
  };
}
