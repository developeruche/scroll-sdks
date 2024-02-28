import { Signer } from "ethers";
import { SendMessageResponse } from "../types";
export declare function depositERC1155(target: string, recipent: string, tokenId: BigInt, amount: BigInt, gasLimit: number, vaule: BigInt, signer: Signer): Promise<SendMessageResponse>;
export declare function withdrawERC1155(target: string, recipent: string, tokenId: BigInt, amount: BigInt, gasLimit: number, vaule: BigInt, signer: Signer): Promise<SendMessageResponse>;
