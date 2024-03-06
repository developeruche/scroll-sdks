import { AddressLike, BigNumberish, Signer, ContractTransactionReceipt } from 'ethers'
import { SendMessageResponse } from '../types'
import { genL1ERC1155Gateway, genL2ERC1155Gateway } from '@scroll-tech/core'

/**
 *
 * @param {AddressLike} target This is the address of the ERC1155 token on L1.
 * @param {AddressLike} recipent This is the address of the recipient on L2.
 * @param {BigNumberish} tokenId This is the token ID of the NFT to be deposited.
 * @param {BigNumberish} amount This is the amount of ERC1155 to be deposited to the recipent.
 * @param {number} gasLimit This is the GasLimit for the transaction.
 * @param {BigNumberish} vaule This vaule this Tx would go along with (amount + fee) [use the core moudle to estimate the fee].
 * @param {Signer} signer This the signer of the transaction.
 * @param {boolean} isTestnet This is a flag to indicate if the network is a testnet or not.
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
): Promise<ContractTransactionReceipt | null> {
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
  );


  let receipt = await depositERC1155.wait()


  return receipt
}

/**
 *
 * @param {AddressLike} target The address of ERC1155 token contract on L2.
 * @param {AddressLike} recipent This is the address that would be recieving the NFT on L1.
 * @param {BigNumberish} tokenId This is the token ID of the NFT to be withdrawn.
 * @param {BigNumberish} amount This is the amount of ERC1155 to be withdrawn to the recipent.
 * @param {number} gasLimit This is the gas limit to be spent on L2.
 * @param {BigNumberish} vaule Value to be sent along with the transaction.
 * @param {Signer} signer Signer of the transaction.
 * @param {boolean} isTestnet This is a flag to indicate if the network is a testnet or not.
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
): Promise<ContractTransactionReceipt | null> {
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

  let receipt = await withdrawERC1155.wait()


  return receipt
}

/**
 *
 * @param {AddressLike} _l1Token The address of the ERC1155 token in L1.
 * @param {AddressLike} _l2Token The address of corresponding ERC1155 token in L2.
 * @param {Signer} _signer Signer of the transaction.
 * @param {boolean} _isTestnet This is a flag to indicate if the network is a testnet or not.
 * @returns {SendMessageResponse} {txHash: string, messageHash: string}
 */
export async function updateTokenMapping(
  _l1Token: AddressLike,
  _l2Token: AddressLike,
  _signer: Signer,
  _isTestnet: boolean
): Promise<ContractTransactionReceipt | null> {
  let l1ERC1155Gateway = genL1ERC1155Gateway(_signer, _isTestnet)

  let updateTokenMapping = await l1ERC1155Gateway['updateTokenMapping(address,address)'](_l1Token, _l2Token)

  let receipt = await updateTokenMapping.wait()

  return receipt
}
