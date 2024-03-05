import { BigNumberish, Provider, Signer } from 'ethers'
import { SendMessageResponse } from '../types'
import { genL1ERC721Gateway, genL2ERC721Gateway } from '@scroll-tech/core'

/**
 *
 * @param target this is the address of the NFT token on L2
 * @param recipent this is the address that would be recieving the NFT on L2
 * @param tokenId this is the token ID of the NFT to be deposited
 * @param gasLimit this is the gas limit for the transaction
 * @param vaule this is the vaule this Tx would go along with (amount + fee) [use the core moudle to estimate the fee]
 * @param signer this the signer of the transaction
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 * @returns {SendMessageResponse} {txHash: string, messageHash: string}
 */
export async function depositERC721(
  target: string,
  recipent: string,
  tokenId: BigNumberish,
  gasLimit: number,
  value: BigNumberish,
  signer: Signer,
  isTestnet: boolean
): Promise<SendMessageResponse> {
  let l1ERC721gateway = genL1ERC721Gateway(signer, isTestnet)

  let depositERC721 = await l1ERC721gateway['depositERC721(address,address,uint256,uint256)'](
    target,
    recipent,
    tokenId,
    gasLimit, // gas limit
    {
      value,
    }
  )

  await depositERC721.wait()

  const messageResponse: SendMessageResponse = {
    txHash: depositERC721.hash,
    messageHash: '',
  }

  return messageResponse
}

/**
 *
 * @param target this is the address of the NFT token on L2
 * @param recipent this is the address that would be recieving the NFT on L1
 * @param tokenId this is the token ID of the NFT to be withdrawn
 * @param gasLimit this is the gas limit for the transaction
 * @param value the vaule this Tx would go along with (amount + fee) [in this case fee can be 0, use the core moudle to estimate the fee]
 * @param signer this the signer of the transaction
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 * @returns {SendMessageResponse} {txHash: string, messageHash: string}
 */
export async function withdrawERC721(
  target: string,
  recipent: string,
  tokenId: BigNumberish,
  gasLimit: number,
  value: BigNumberish,
  signer: Provider,
  isTestnet: boolean
): Promise<SendMessageResponse> {
  let l2ERC721gateway = genL2ERC721Gateway(signer, isTestnet)

  let withdrawERC721 = await l2ERC721gateway['withdrawERC721(address,address,uint256,uint256)'](
    target,
    recipent,
    tokenId,
    gasLimit, // gas limit
    {
      value,
    }
  )

  await withdrawERC721.wait()

  const messageResponse: SendMessageResponse = {
    txHash: withdrawERC721.hash,
    messageHash: '',
  }

  return messageResponse
}
