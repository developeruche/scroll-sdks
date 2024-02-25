export interface Message {
    hello_world: () => void;
}


/**
 * @description this is the structure of the message proof
 * @param {string} merkleProof - this is the merkle proof of the message been included in a batch
 * @param {number} batchIndex - this is the index of the batch
 */
export interface L2MessageProof {
    merkleProof: string,
    batchIndex: number,
}


/**
 * @param {string} from - this is the address of the sender
 * @param {string} to - this is the address of the receiver
 * @param {number} value - this is the value of the message
 * @param {number} nonce - this is the nonce of the message
 * @param {string} data - this is the data of the message
 * @param {L2MessageProof} proof - this is the proof of the message
 */
export interface relayMessageParams {
    from: string,
    to: string,
    value: number,
    nonce: number,
    data: string,
    proof: L2MessageProof
}



/**
 * @enum CHAIN this is a structure to define the chain (source and destination)
 * @param L1 - Ethereum
 * @param L2 - Scroll
 */
export enum CHAIN {
    L1 = "L1",
    L2 = "L2"
}


/**
 * @enum MESSAGE_STATUS this is a structure to define the status of a message
 * @param PENDING - the message is still pending
 * @param CONFIRMED - the message has been confirmed
 * @param FAILED - the message failed
 */
export enum MESSAGE_STATUS {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    FAILED = "FAILED"
}


export interface SendMessageResponse {
    txHash: string,
    messageHash: string,
}