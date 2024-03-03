import { AddressLike, BigNumberish, Signer } from 'ethers'
import { SendMessageResponse } from '../types'
import { genL1ERC1155Gateway, genL2ERC1155Gateway } from '@scroll-tech/core'

/**
 *
 * @param {string} target this is the address of the ERC1155 token on L1
 * @param {string} recipent this is the address of the recipient on L2
 * @param {BigInt} tokenId this is the token ID of the NFT to be deposited
 * @param {string} amount this is the amount of ERC1155 to be deposited to the recipent
 * @param {number} gasLimit this is the GasLimit for the transaction
 * @param {BigInt} vaule this vaule this Tx would go along with (amount + fee) [use the core moudle to estimate the fee]
 * @param {Signer} signer this the signer of the transaction
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 * @returns {SendMessageResponse} {txHash: string, messageHash: string}
 */
export async function depositERC1155(
  target: AddressLike,
  recipent: AddressLike,
  tokenId: BigNumberish,
  amount: BigNumberish,
  gasLimit: number,
  value: BigNumberish,
  signer: Signer,
  isTestnet: boolean
): Promise<SendMessageResponse> {
  let l1ERC1155Gateway = genL1ERC1155Gateway(signer, isTestnet)

  let depositERC1155 = await l1ERC1155Gateway['depositERC1155(address,address,uint256,uint256,uint256)'](
    target,
    recipent,
    tokenId,
    amount,
    gasLimit,
    {
      value,
    }
  )
  await depositERC1155.wait()

  const messageResponse: SendMessageResponse = {
    txHash: depositERC1155.hash,
    messageHash: '',
  }

  return messageResponse
}

/**
 *
 * @param {string} target The address of ERC1155 token contract on L2.
 * @param {string} recipent this is the address that would be recieving the NFT on L1
 * @param {BigInt} tokenId this is the token ID of the NFT to be withdrawn
 * @param {string} amount this is the amount of ERC1155 to be withdrawn to the recipent
 * @param {number} gasLimit this is the gas limit to be spent on L2
 * @param {BigInt} vaule value to be sent along with the transaction
 * @param {Signer} signer signer of the transaction
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 * @returns {SendMessageResponse} {txHash: string, messageHash: string}
 */
export async function withdrawERC1155(
  target: AddressLike,
  recipent: AddressLike,
  tokenId: BigNumberish,
  amount: BigNumberish,
  gasLimit: number,
  value: BigNumberish,
  signer: Signer,
  isTestnet: boolean
): Promise<SendMessageResponse> {
  let l2ERC1155Gateway = genL2ERC1155Gateway(signer, isTestnet)

  let withdrawERC1155 = await l2ERC1155Gateway['withdrawERC1155(address,address,uint256,uint256,uint256)'](
    target,
    recipent,
    tokenId,
    amount,
    gasLimit,
    {
      value,
    }
  )

  await withdrawERC1155.wait()

  const messageResponse: SendMessageResponse = {
    txHash: withdrawERC1155.hash,
    messageHash: '',
  }

  return messageResponse
}
