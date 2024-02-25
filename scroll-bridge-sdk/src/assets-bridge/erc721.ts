import { Signer } from "ethers";
import { SendMessageResponse } from "../types";











/**
 * 
 * @param target this is the address of the NFT token on L2
 * @param recipent this is the address that would be recieving the NFT on L2
 * @param tokenId this is the token ID of the NFT to be deposited
 * @param gasLimit 
 * @param vaule 
 * @param signer 
 * @returns 
 */
export async function deposistERC721(
    target: string,
    recipent: string,
    tokenId: BigInt,
    gasLimit: number,
    vaule: BigInt,
    signer: Signer
): Promise<SendMessageResponse> {
    const messageResponse: SendMessageResponse = {
        txHash: "",
        messageHash: ""
    };

    return messageResponse;
}



/**
 * 
 * @param target this is the address of the NFT token on L2
 * @param recipent this is the address that would be recieving the NFT on L1
 * @param tokenId this is the token ID of the NFT to be withdrawn
 * @param gasLimit 
 * @param vaule 
 * @param signer 
 * @returns 
 */
export async function withdrawERC721(
    target: string,
    recipent: string,
    tokenId: BigInt,
    gasLimit: number,
    vaule: BigInt,
    signer: Signer
): Promise<SendMessageResponse> {
    const messageResponse: SendMessageResponse = {
        txHash: "",
        messageHash: ""
    };

    return messageResponse;
}