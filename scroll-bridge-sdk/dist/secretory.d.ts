import { Provider } from "ethers";
import { CHAIN, MESSAGE_STATUS } from "./types";
export declare function getMessageStatus(soure: CHAIN, messageHash: string, provider: Provider): Promise<MESSAGE_STATUS>;
export declare function getMessages(address: string): Promise<any>;
export declare function getMessageProof(txHash: string): Promise<any>;
