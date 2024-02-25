import { Signer } from "ethers";
import { SendMessageResponse } from "../types";







/**
 * 
 * @param {string} target 
 * @param {string} recipent 
 * @param {BigInt} tokenId 
 * @param {string} amount 
 * @param {number} gasLimit 
 * @param {BigInt} vaule 
 * @param {Signer} signer 
 * @returns {SendMessageResponse} {txHash: string, messageHash: string}
 */
export async function depositERC1155(
    target: string,
    recipent: string,
    tokenId: BigInt,
    amount: BigInt,
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
 * @param {string} target The address of ERC1155 token contract on L2.
 * @param {string} recipent this is the address that would be recieving the NFT on L1
 * @param {BigInt} tokenId this is the token ID of the NFT to be withdrawn
 * @param {string} amount this is the amount of ERC1155 to be withdrawn to the recipent
 * @param {number} gasLimit this is the gas limit to be spent on L2
 * @param {BigInt} vaule value to be sent along with the transaction
 * @param {Signer} signer signer of the transaction
 * @returns {SendMessageResponse} {txHash: string, messageHash: string}
 */
export async function withdrawERC1155(
    target: string,
    recipent: string,
    tokenId: BigInt,
    amount: BigInt,
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