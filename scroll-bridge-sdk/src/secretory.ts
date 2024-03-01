import { Provider } from "ethers";
import { CHAIN, MESSAGE_STATUS } from "./types";
import { genL1ScrollMessenger, genL2ScrollMessenger } from "@scroll-tech/core";

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
export async function getMessageStatus(source: CHAIN, messageHash: string, provider: Provider, isTestnet: boolean): Promise<MESSAGE_STATUS> {
    let messagerL1 = await genL1ScrollMessenger(provider, isTestnet);
    let messagerL2 = await genL2ScrollMessenger(provider, isTestnet);
    
    
    switch (source) {
        case CHAIN.L1:
            let isDropped = await messagerL1.isL1MessageDropped(messageHash);
            let isConfirmed = await messagerL2.isL1MessageExecuted(messageHash);


            if (isConfirmed) {
                return MESSAGE_STATUS.CONFIRMED;
            }

            if (isDropped) {
                return MESSAGE_STATUS.DROPPED;
            }

            let latestRetryCount = await messagerL1.prevReplayIndex(messageHash);

            if (latestRetryCount > 3) {
                return MESSAGE_STATUS.FAILED;
            }

            return MESSAGE_STATUS.PENDING;
        case CHAIN.L2:
            let isConfirmedL2 = await messagerL1.isL2MessageExecuted(messageHash);

            if (isConfirmedL2) {
                return MESSAGE_STATUS.CONFIRMED;
            }

            return MESSAGE_STATUS.PENDING;
        default:
            throw new Error("Invalid source chain");
    }
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