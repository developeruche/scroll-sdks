import { BigNumberish, Signer } from 'ethers'
import { SendMessageResponse } from '../types'
import { genL1GatewayRouter, genL2StandardERC20Gateway, genL2GatewayRouter } from '@scroll-tech/core'

/**
 *
 * @description this function is used to deposit ERC20 from L1 to L2
 * @param {string} target this is the address of the ERC20 token
 * @param {string} recipient this is the address of the recipient on L2
 * @param {BigInt} amount this is the amount of ERC20 to be deposited to the recipient
 * @param {number} gasLimit this is the gas limit to be spent on L2
 * @param {BigInt} value this is the value this Tx would go along with (amount + fee) [use the core module to estimate the fee]
 * @param {Signer} signer this the signer of the transaction
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 * @returns {SendMessageResponse} {txHash: string, messageHash: string}
 */
export async function depositERC20(
  target: string,
  recipient: string,
  amount: BigNumberish,
  gasLimit: number,
  value: BigNumberish,
  signer: Signer,
  isTestnet: boolean
): Promise<SendMessageResponse> {
  let l1GatewayRouter = genL1GatewayRouter(signer, isTestnet)
  let depositERC20 = await l1GatewayRouter['depositERC20(address,address,uint256,uint256)'](
    target,
    recipient,
    amount,
    gasLimit,
    {
      value,
    }
  )
  await depositERC20.wait()

  const messageResponse: SendMessageResponse = {
    txHash: depositERC20.hash,
    messageHash: '',
  }

  return messageResponse
}

/**
 *
 * @description this function is used to withdraw ERC20 from L2 to L1
 * @param {string} target this is the address of the ERC20 token
 * @param {string} recipient this is the address of the recipient on L1
 * @param {BigInt} amount this is the amount of ERC20 to be withdrawn to the recipient
 * @param {number} gasLimit this is the gas limit to be spent on L2
 * @param {BigInt} value this is the value this Tx would go along with (amount + fee) [in this case fee can be 0, use the core module to estimate the fee]
 * @param {Signer} signer this the signer of the transaction
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 * @returns {SendMessageResponse} {txHash: string, messageHash: string}
 */
export async function withdrawERC20(
  target: string,
  recipient: string,
  amount: BigNumberish,
  gasLimit: number,
  value: BigNumberish,
  signer: Signer,
  isTestnet: boolean
): Promise<SendMessageResponse> {
  const l2GatewayRouter = genL2GatewayRouter(signer, isTestnet)

  const withdrawERC20Tx = await l2GatewayRouter['withdrawERC20(address,address,uint256,uint256)'](
    target,
    recipient,
    amount,
    gasLimit,
    {
      value,
    }
  )

  await withdrawERC20Tx.wait()

  const messageResponse: SendMessageResponse = {
    txHash: withdrawERC20Tx.hash,
    messageHash: '',
  }

  return messageResponse
}
