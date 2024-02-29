import { Signer } from "ethers";
import { SendMessageResponse } from "../types";
export declare function depositETH(recipient: string, amount: BigInt, gasLimit: number, value: BigInt, signer: Signer, isTestnet: boolean): Promise<SendMessageResponse>;
export declare function withdrawETH(recipient: string, amount: BigInt, gasLimit: number, value: BigInt, signer: Signer, isTestnet: boolean): Promise<SendMessageResponse>;
