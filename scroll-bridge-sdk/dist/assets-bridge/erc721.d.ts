import { Signer } from "ethers";
import { SendMessageResponse } from "../types";
export declare function deposistERC721(target: string, recipent: string, tokenId: BigInt, gasLimit: number, vaule: BigInt, signer: Signer, isTestnet: boolean): Promise<SendMessageResponse>;
export declare function withdrawERC721(target: string, recipent: string, tokenId: BigInt, gasLimit: number, vaule: BigInt, signer: Signer, isTestnet: boolean): Promise<SendMessageResponse>;
