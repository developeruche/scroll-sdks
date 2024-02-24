import { CHAIN, MESSAGE_STATUS, relayMessageParams } from "./types";
import { ethers, Provider, Signer } from 'ethers';





/**
 * @description this function is used for sending message from 'Chain A' to 'Chain B'
 * @param {CHAIN} source this is the source chain
 * @param {string} target - this is the address of the contract recieving this message
 * @param {number} value - this is the amount of ether to be sent along with the message
 * @param {string} data - this is the data to be sent along with the message (in hex) (e.g. '0xa413686200)
 * @param {number} gasLimit - this is the gas limit for the transaction (in wei) (when excecuting the message in destination chain) (this is important when messeage route is from L1 to L2)
 * @param {string} refundAddress - this is the address the remaining gas for excecution would be sent to
 * @param {number} fee - this is the fee for sending the message
 * @param {Signer} signer - this is the signer for the transaction
 * @returns {Promise<string>} - this is the message hash
*/
export async function sendMessage(
    source: CHAIN,
    target: string, 
    value: number, 
    data: string, 
    gasLimit: number, 
    from: string, 
    fee: number,
    signer: Signer
    ): Promise<string>
{
    return '';
}


/**
 * 
 * @description this function would be used to estimate the fee for sending a message from 'Chain A' to 'Chain B'
 * @param {number} gasLimit - this is the gas limit for the transaction (in wei) (when excecuting the message in destination chain) (this is important when messeage route is from L1 to L2)
 * @param {Provider} provier - this is the provider for the transaction
 * @returns {number} - this is the estimated fee for sending the message
 * @notice this function is only necessary when sending a message from L1 to L2
 */
export async function estimateCrossDomainMessageFee(gasLimit: number, provier: Provider): Promise<number> {
    return 1;
}


/**
 * 
 * @description this function is used to get the message status
 * @param {string} messageHash - this is the hash of the message
 * @param {CHAIN} chain - this is the chain the message was sent from
 * @param {Provider} provider - this is the provider for the transaction
 * 
 * @returns {Promise<MESSAGE_STATUS>} - this is the status of the message
 */
export async function getMessageStatus(soure: CHAIN, messageHash: string, provider: Provider): Promise<MESSAGE_STATUS> {
    // NOTE: check is message has been dropped using isMessageDropped function (view function)
    return MESSAGE_STATUS.PENDING;
}


/**
 * @description this function is used to get all the messsages carried out by the user and the message status
 * @param {string} address - this is the address of the user
 */
export async function getMessages(address: string): Promise<any> {

}


/**
 * @description this function is used to get message proof
 * @param {string} txHash - this is the hash of the transaction where the message was sent
 */
export async function getMessageProof(txHash: string): Promise<any> {

}


/**
 * This function is used to call the relayMessage function, this last step in the L2 -> L1 route
 * @param {relayMessageParams} params - this is the parameters for the relayMessage function
 * @param {Signer} signer - this is the signer for the transaction
 */
export async function relayMessageWithProof(params: relayMessageParams, signer: Signer): Promise<any> {

}


/**
 * @description this function would be used to replay a message
 * @param {string} from - this is the address of the sender 
 * @param {string} to - this is the address of the receiver
 * @param {number} value - this is the value of the message
 * @param {number} messageNonce - this is the nonce of the message  
 * @param {string} data - this is the data of the message
 * @param {number} gasLimit - this is the gas limit for the transaction (in wei) (when excecuting the message in destination chain) (this is important when messeage route is from L1 to L2)
 * @param {string} refundAddress - this is the address the remaining gas for excecution would be sent to
 * @param {Signer} signer - this is the signer for the transaction
 */
export async function replayMessage(
    from: string, 
    to: string, 
    value: number, 
    messageNonce: number, 
    data: string, 
    gasLimit: number, 
    refundAddress: string,
    signer: Signer

    ): Promise<any> {

    }


/**
 * @description this function is used to drop a message
 * @param {string} from - this is the address of the sender
 * @param {string} to - this is the address of the receiver
 * @param {number} value - this is the value of the message
 * @param {number} messageNonce - this is the nonce of the message
 * @param {string} data - this is the data of the message
 */
export async function dropMessage(
    from: string, 
    to: string, 
    value: number, 
    messageNonce: number, 
    data: string
    ): Promise<any> {

}