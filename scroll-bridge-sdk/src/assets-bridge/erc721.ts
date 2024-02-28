import { Signer } from "ethers";
import { SendMessageResponse } from "../types";











/**
 * 
 * @param target this is the address of the NFT token on L2
 * @param recipent this is the address that would be recieving the NFT on L2
 * @param tokenId this is the token ID of the NFT to be deposited
 * @param gasLimit this is the gas limit for the transaction
 * @param vaule this is the vaule this Tx would go along with (amount + fee) [use the core moudle to estimate the fee]
 * @param signer this the signer of the transaction
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 * @returns {SendMessageResponse} {txHash: string, messageHash: string} 
 */
export async function deposistERC721(
    target: string,
    recipent: string,
    tokenId: BigInt,
    gasLimit: number,
    vaule: BigInt,
    signer: Signer,
    isTestnet: boolean
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
 * @param gasLimit this is the gas limit for the transaction
 * @param vaule the vaule this Tx would go along with (amount + fee) [in this case fee can be 0, use the core moudle to estimate the fee]
 * @param signer this the signer of the transaction
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 * @returns {SendMessageResponse} {txHash: string, messageHash: string}
 */
export async function withdrawERC721(
    target: string,
    recipent: string,
    tokenId: BigInt,
    gasLimit: number,
    vaule: BigInt,
    signer: Signer,
    isTestnet: boolean
): Promise<SendMessageResponse> {
    const messageResponse: SendMessageResponse = {
        txHash: "",
        messageHash: ""
    };

    return messageResponse;
}