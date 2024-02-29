import { BigNumberish, Signer } from "ethers";
import { SendMessageResponse } from "../types";
export declare function depositERC20(target: string, recipient: string, amount: BigNumberish, gasLimit: number, value: BigNumberish, signer: Signer, isTestnet: boolean): Promise<SendMessageResponse>;
export declare function withdrawERC20(target: string, recipient: string, amount: BigInt, gasLimit: number, value: BigInt, signer: Signer, isTestnet: boolean): Promise<SendMessageResponse>;
