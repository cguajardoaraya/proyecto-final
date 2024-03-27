/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface OperacionesInterface extends ethers.utils.Interface {
  functions: {
    "actualizarDato(string)": FunctionFragment;
    "dato()": FunctionFragment;
    "obtenerDato()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "actualizarDato",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "dato", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "obtenerDato",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "actualizarDato",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dato", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "obtenerDato",
    data: BytesLike
  ): Result;

  events: {
    "DatoActualizado(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DatoActualizado"): EventFragment;
}

export type DatoActualizadoEvent = TypedEvent<[string] & { nuevoDato: string }>;

export class Operaciones extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: OperacionesInterface;

  functions: {
    actualizarDato(
      _nuevoDato: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dato(overrides?: CallOverrides): Promise<[string]>;

    obtenerDato(overrides?: CallOverrides): Promise<[string]>;
  };

  actualizarDato(
    _nuevoDato: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dato(overrides?: CallOverrides): Promise<string>;

  obtenerDato(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    actualizarDato(
      _nuevoDato: string,
      overrides?: CallOverrides
    ): Promise<void>;

    dato(overrides?: CallOverrides): Promise<string>;

    obtenerDato(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "DatoActualizado(string)"(
      nuevoDato?: null
    ): TypedEventFilter<[string], { nuevoDato: string }>;

    DatoActualizado(
      nuevoDato?: null
    ): TypedEventFilter<[string], { nuevoDato: string }>;
  };

  estimateGas: {
    actualizarDato(
      _nuevoDato: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dato(overrides?: CallOverrides): Promise<BigNumber>;

    obtenerDato(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    actualizarDato(
      _nuevoDato: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dato(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    obtenerDato(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}