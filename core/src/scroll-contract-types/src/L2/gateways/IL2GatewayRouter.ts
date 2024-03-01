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

export interface IL2GatewayRouterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "finalizeDepositERC20"
      | "finalizeDepositETH"
      | "getL1ERC20Address"
      | "getL2ERC20Address"
      | "setDefaultERC20Gateway"
      | "setERC20Gateway"
      | "setETHGateway"
      | "withdrawERC20(address,uint256,uint256)"
      | "withdrawERC20(address,address,uint256,uint256)"
      | "withdrawERC20AndCall"
      | "withdrawETH(address,uint256,uint256)"
      | "withdrawETH(uint256,uint256)"
      | "withdrawETHAndCall"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FinalizeDepositERC20"
      | "FinalizeDepositETH"
      | "SetDefaultERC20Gateway"
      | "SetERC20Gateway"
      | "SetETHGateway"
      | "WithdrawERC20"
      | "WithdrawETH"
  ): EventFragment;

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
    functionFragment: "finalizeDepositETH",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
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
    functionFragment: "setDefaultERC20Gateway",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setERC20Gateway",
    values: [AddressLike[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setETHGateway",
    values: [AddressLike]
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
    functionFragment: "finalizeDepositERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeDepositETH",
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
  decodeFunctionResult(
    functionFragment: "setDefaultERC20Gateway",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setERC20Gateway",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setETHGateway",
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

export namespace SetDefaultERC20GatewayEvent {
  export type InputTuple = [
    oldDefaultERC20Gateway: AddressLike,
    newDefaultERC20Gateway: AddressLike
  ];
  export type OutputTuple = [
    oldDefaultERC20Gateway: string,
    newDefaultERC20Gateway: string
  ];
  export interface OutputObject {
    oldDefaultERC20Gateway: string;
    newDefaultERC20Gateway: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetERC20GatewayEvent {
  export type InputTuple = [
    token: AddressLike,
    oldGateway: AddressLike,
    newGateway: AddressLike
  ];
  export type OutputTuple = [
    token: string,
    oldGateway: string,
    newGateway: string
  ];
  export interface OutputObject {
    token: string;
    oldGateway: string;
    newGateway: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetETHGatewayEvent {
  export type InputTuple = [
    oldETHGateway: AddressLike,
    newEthGateway: AddressLike
  ];
  export type OutputTuple = [oldETHGateway: string, newEthGateway: string];
  export interface OutputObject {
    oldETHGateway: string;
    newEthGateway: string;
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

export interface IL2GatewayRouter extends BaseContract {
  connect(runner?: ContractRunner | null): IL2GatewayRouter;
  waitForDeployment(): Promise<this>;

  interface: IL2GatewayRouterInterface;

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

  finalizeDepositERC20: TypedContractMethod<
    [
      l1Token: AddressLike,
      l2Token: AddressLike,
      from: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "payable"
  >;

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

  getL1ERC20Address: TypedContractMethod<
    [l2Token: AddressLike],
    [string],
    "view"
  >;

  getL2ERC20Address: TypedContractMethod<
    [l1Token: AddressLike],
    [string],
    "view"
  >;

  setDefaultERC20Gateway: TypedContractMethod<
    [_newDefaultERC20Gateway: AddressLike],
    [void],
    "nonpayable"
  >;

  setERC20Gateway: TypedContractMethod<
    [_tokens: AddressLike[], _gateways: AddressLike[]],
    [void],
    "nonpayable"
  >;

  setETHGateway: TypedContractMethod<
    [_newEthGateway: AddressLike],
    [void],
    "nonpayable"
  >;

  "withdrawERC20(address,uint256,uint256)": TypedContractMethod<
    [token: AddressLike, amount: BigNumberish, gasLimit: BigNumberish],
    [void],
    "payable"
  >;

  "withdrawERC20(address,address,uint256,uint256)": TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  withdrawERC20AndCall: TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike,
      gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  "withdrawETH(address,uint256,uint256)": TypedContractMethod<
    [to: AddressLike, amount: BigNumberish, gasLimit: BigNumberish],
    [void],
    "payable"
  >;

  "withdrawETH(uint256,uint256)": TypedContractMethod<
    [amount: BigNumberish, gasLimit: BigNumberish],
    [void],
    "payable"
  >;

  withdrawETHAndCall: TypedContractMethod<
    [
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike,
      gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "finalizeDepositERC20"
  ): TypedContractMethod<
    [
      l1Token: AddressLike,
      l2Token: AddressLike,
      from: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "payable"
  >;
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
    nameOrSignature: "getL1ERC20Address"
  ): TypedContractMethod<[l2Token: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getL2ERC20Address"
  ): TypedContractMethod<[l1Token: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "setDefaultERC20Gateway"
  ): TypedContractMethod<
    [_newDefaultERC20Gateway: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setERC20Gateway"
  ): TypedContractMethod<
    [_tokens: AddressLike[], _gateways: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setETHGateway"
  ): TypedContractMethod<[_newEthGateway: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawERC20(address,uint256,uint256)"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish, gasLimit: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "withdrawERC20(address,address,uint256,uint256)"
  ): TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "withdrawERC20AndCall"
  ): TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike,
      gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "withdrawETH(address,uint256,uint256)"
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish, gasLimit: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "withdrawETH(uint256,uint256)"
  ): TypedContractMethod<
    [amount: BigNumberish, gasLimit: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "withdrawETHAndCall"
  ): TypedContractMethod<
    [
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike,
      gasLimit: BigNumberish
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
    key: "FinalizeDepositETH"
  ): TypedContractEvent<
    FinalizeDepositETHEvent.InputTuple,
    FinalizeDepositETHEvent.OutputTuple,
    FinalizeDepositETHEvent.OutputObject
  >;
  getEvent(
    key: "SetDefaultERC20Gateway"
  ): TypedContractEvent<
    SetDefaultERC20GatewayEvent.InputTuple,
    SetDefaultERC20GatewayEvent.OutputTuple,
    SetDefaultERC20GatewayEvent.OutputObject
  >;
  getEvent(
    key: "SetERC20Gateway"
  ): TypedContractEvent<
    SetERC20GatewayEvent.InputTuple,
    SetERC20GatewayEvent.OutputTuple,
    SetERC20GatewayEvent.OutputObject
  >;
  getEvent(
    key: "SetETHGateway"
  ): TypedContractEvent<
    SetETHGatewayEvent.InputTuple,
    SetETHGatewayEvent.OutputTuple,
    SetETHGatewayEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawERC20"
  ): TypedContractEvent<
    WithdrawERC20Event.InputTuple,
    WithdrawERC20Event.OutputTuple,
    WithdrawERC20Event.OutputObject
  >;
  getEvent(
    key: "WithdrawETH"
  ): TypedContractEvent<
    WithdrawETHEvent.InputTuple,
    WithdrawETHEvent.OutputTuple,
    WithdrawETHEvent.OutputObject
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

    "SetDefaultERC20Gateway(address,address)": TypedContractEvent<
      SetDefaultERC20GatewayEvent.InputTuple,
      SetDefaultERC20GatewayEvent.OutputTuple,
      SetDefaultERC20GatewayEvent.OutputObject
    >;
    SetDefaultERC20Gateway: TypedContractEvent<
      SetDefaultERC20GatewayEvent.InputTuple,
      SetDefaultERC20GatewayEvent.OutputTuple,
      SetDefaultERC20GatewayEvent.OutputObject
    >;

    "SetERC20Gateway(address,address,address)": TypedContractEvent<
      SetERC20GatewayEvent.InputTuple,
      SetERC20GatewayEvent.OutputTuple,
      SetERC20GatewayEvent.OutputObject
    >;
    SetERC20Gateway: TypedContractEvent<
      SetERC20GatewayEvent.InputTuple,
      SetERC20GatewayEvent.OutputTuple,
      SetERC20GatewayEvent.OutputObject
    >;

    "SetETHGateway(address,address)": TypedContractEvent<
      SetETHGatewayEvent.InputTuple,
      SetETHGatewayEvent.OutputTuple,
      SetETHGatewayEvent.OutputObject
    >;
    SetETHGateway: TypedContractEvent<
      SetETHGatewayEvent.InputTuple,
      SetETHGatewayEvent.OutputTuple,
      SetETHGatewayEvent.OutputObject
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