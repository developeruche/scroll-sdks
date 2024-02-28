import { Signer } from "ethers";
import { SendMessageResponse } from "../types";
export declare function depositERC20(target: string, recipient: string, amount: BigInt, gasLimit: number, value: BigInt, signer: Signer): Promise<SendMessageResponse>;
export declare function withdrawERC20(target: string, recipient: string, amount: BigInt, gasLimit: number, value: BigInt, signer: Signer): Promise<SendMessageResponse>;
