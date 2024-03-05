import { ethers } from "ethers";






/**
 * @description this function performs `abi.encodeWithSignature` and returns the calldata
 */
export function encodeDomainCalldata(
    sender: string,
    target: string,
    value: string,
    messsgeNonce: number,
    data: string
) {
    return ethers.AbiCoder.defaultAbiCoder().encode(
        ["address", "address", "uint256", "uint256", "bytes"],
        [sender, target, value, messsgeNonce, data]
    );
}