import { BaseContract, Contract, ContractTransactionReceipt, ethers, getDefaultProvider, solidityPackedKeccak256 } from "ethers";






/**
 * @description this function performs `abi.encodeWithSignature` and returns the calldata
 * @param {string} sender - this is the address of the sender
 * @param {string} target - this is the address of the receiver
 * @param {string} value - this is the value to be sent
 * @param {number} messsgeNonce - this is the nonce of the message
 * @param {string} data - this is the data of the message
 */
export function encodeDomainCalldata(
    sender: string,
    target: string,
    value: string,
    messsgeNonce: number,
    data: string
): string {
    return RelayMessageEncoder.encodeFunctionData(
        'relayMessage',
        [sender, target, value, messsgeNonce, data]
    );
}


/**
 * @description this function returns the hash of the message
 * @param {string} message - this is the message to be hashed
 */
export function hashRelayMessage(
    message: string
): string {
    let hash = solidityPackedKeccak256(["bytes"], [message]);
    return hash
}


/**
 * @description this is the interface for the relayMessage function
 */
export const RelayMessageEncoder = new ethers.Interface([
    'function relayMessage(address sender, address target, uint256 value, uint256 messsgeNonce, bytes data) view returns (bytes)'
])


/**
 * @description takes in a transaction recipt, parse the evevts and returns the message hash
 */

export function queryMessageHash(
    recipt: ContractTransactionReceipt,
    contract: Contract | BaseContract
  ) {
    let logDescriptions = recipt.logs.map(log => contract.interface.parseLog(log)).filter(log => !!log);
    console.log(logDescriptions, 'logDescriptions');
    let logDescriptionFilter = logDescriptions.filter(log => log!.name === 'SentMessage');
    console.log(logDescriptionFilter, 'logDescriptionFilter');
    let args = logDescriptionFilter[0]!.args;
    console.log(args, 'args');
  
    let sender = args[0];
    let to = args[1];
    let value = args[2];
    let messageNonce = args[3];
    let data = args[5];
  
    let message = encodeDomainCalldata(sender, to, value, messageNonce, data);
    console.log(message, 'message');
    let messageHash = hashRelayMessage(message);
    console.log(messageHash, 'messageHash');
    
    return messageHash;
  }