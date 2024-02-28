import { Signer } from "ethers";
import { SendMessageResponse } from "../types";






/**
 * 
 * @description this function is used to deposit ETH from L1 to L2
 * @param {string} recipient this is the address of the recipient on L2
 * @param {BigInt} amount this is amount of ETH to be deposited to the recipent
 * @param {number} gasLimit this is the gas limit to be spent on L2
 * @param {BigInt} value this is the vaule this Tx would go along with (amount + fee) 
 * @param {Signer} signer this the signer of the transaction
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 * @see GasModule in the core to sdk
 * @returns {SendMessageResponse} this is the response of the message
 */
export async function depositETH(
    recipient: string,
    amount: BigInt,
    gasLimit: number,
    value: BigInt,
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
 * @description this function is used to withdraw ETH from L2 to L1
 * @param {string} recipient this is the address of the recipient on L1
 * @param {BigInt} amount this is amount of ETH to be withdrawn to the recipent
 * @param {number} gasLimit this is the gas limit to be spent on L2
 * @param {BigInt} value this is the vaule this Tx would go along with (amount + fee) 
 * @param {Signer} signer this the signer of the transaction
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 * @see GasModule in the core to sdk, fee in this case can be 0
 * @returns {SendMessageResponse} this is the response of the message
 */
export async function withdrawETH(
    recipient: string,
    amount: BigInt,
    gasLimit: number,
    value: BigInt,
    signer: Signer,
    isTestnet: boolean
): Promise<SendMessageResponse> {
    
    
    const messageResponse: SendMessageResponse = {
        txHash: "",
        messageHash: ""
    };

    return messageResponse;
}