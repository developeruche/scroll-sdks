import { Provider } from "ethers";
import { CHAIN, MESSAGE_STATUS } from "./types";

/**
 * 
 * @description this function is used to get the message status
 * @param {string} messageHash - this is the hash of the message
 * @param {CHAIN} chain - this is the chain the message was sent from
 * @param {Provider} provider - this is the provider for the transaction
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 * 
 * @returns {Promise<MESSAGE_STATUS>} - this is the status of the message
 */
export async function getMessageStatus(soure: CHAIN, messageHash: string, provider: Provider, isTestnet: boolean): Promise<MESSAGE_STATUS> {
    // NOTE: check is message has been dropped using isMessageDropped function (view function)
    
    return MESSAGE_STATUS.PENDING;
}


/**
 * @description this function is used to get all the messsages carried out by the user and the message status
 * @param {string} address - this is the address of the user
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 */
export async function getMessages(address: string, isTestnet: boolean): Promise<any> {

}


/**
 * @description this function is used to get message proof
 * @param {string} txHash - this is the hash of the transaction where the message was sent
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 */
export async function getMessageProof(txHash: string, isTestnet: boolean): Promise<any> {

}