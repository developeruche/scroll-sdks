import { ethers, solidityPackedKeccak256 } from "ethers";






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

export function hashRelayMessage(
    message: string
): string {
    let hash = solidityPackedKeccak256(["bytes"], [message]);
    return hash
}

export const RelayMessageEncoder = new ethers.Interface([
    'function relayMessage(address sender, address target, uint256 value, uint256 messsgeNonce, bytes data) view returns (bytes)'
])

