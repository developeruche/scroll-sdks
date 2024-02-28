import { CHAIN, SendMessageResponse, relayMessageParams } from "./types";
import { Signer } from 'ethers';
export declare function sendMessage(source: CHAIN, target: string, value: number, data: string, gasLimit: number, from: string, fee: number, signer: Signer): Promise<SendMessageResponse>;
export declare function relayMessageWithProof(params: relayMessageParams, signer: Signer): Promise<any>;
export declare function replayMessage(from: string, to: string, value: number, messageNonce: number, data: string, gasLimit: number, refundAddress: string, signer: Signer): Promise<any>;
export declare function dropMessage(from: string, to: string, value: number, messageNonce: number, data: string): Promise<any>;
