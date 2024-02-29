import { Provider } from "ethers";
import { CHAIN, MESSAGE_STATUS } from "./types";
export declare function getMessageStatus(soure: CHAIN, messageHash: string, provider: Provider, isTestnet: boolean): Promise<MESSAGE_STATUS>;
export declare function getMessages(address: string, isTestnet: boolean): Promise<any>;
export declare function getMessageProof(txHash: string, isTestnet: boolean): Promise<any>;
