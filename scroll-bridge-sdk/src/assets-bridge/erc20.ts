import { Signer } from "ethers";
import { SendMessageResponse } from "..";








/**
 * 
 * @description this function is used to deposit ERC20 from L1 to L2
 * @param {string} target this is the address of the ERC20 token
 * @param {string} recipient this is the address of the recipient on L2
 * @param {BigInt} amount this is the amount of ERC20 to be deposited to the recipent
 * @param {number} gasLimit this is the gas limit to be spent on L2
 * @param {BigInt} value this is the vaule this Tx would go along with (amount + fee) [use the core moudle to estimate the fee]
 * @param {Signer} signer this the signer of the transaction
 * @returns 
 */
export async function depositERC20(
    target: string,
    recipient: string,
    amount: BigInt,
    gasLimit: number,
    value: BigInt,
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
 * @description this function is used to withdraw ERC20 from L2 to L1
 * @param {string} target this is the address of the ERC20 token
 * @param {string} recipient this is the address of the recipient on L1
 * @param {BigInt} amount this is the amount of ERC20 to be withdrawn to the recipent
 * @param {number} gasLimit this is the gas limit to be spent on L2
 * @param {BigInt} value this is the vaule this Tx would go along with (amount + fee) [in this case fee can be 0, use the core moudle to estimate the fee]
 * @param {Signer} signer this the signer of the transaction
 * @returns 
 */
export async function withdrawERC20(
    target: string,
    recipient: string,
    amount: BigInt,
    gasLimit: number,
    value: BigInt,
    signer: Signer
): Promise<SendMessageResponse> {
    const messageResponse: SendMessageResponse = {
        txHash: "",
        messageHash: ""
    };

    return messageResponse;
}