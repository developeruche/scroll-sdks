import { CHAIN, MESSAGE_STATUS, relayMessageParams } from "./types";
export declare function sendMessage(source: CHAIN, target: string, value: number, data: string, gasLimit: number, from: string, fee: number): Promise<string>;
export declare function estimateCrossDomainMessageFee(gasLimit: number): Promise<number>;
export declare function getMessageStatus(soure: CHAIN, messageHash: string): Promise<MESSAGE_STATUS>;
export declare function getMessages(address: string): Promise<any>;
export declare function getMessageProof(txHash: string): Promise<any>;
export declare function relayMessage(params: relayMessageParams): Promise<any>;
