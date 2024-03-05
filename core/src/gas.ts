import { BigNumberish, BytesLike, ContractTransaction, ethers, Provider, Signer, Contract } from 'ethers'
import { genL1GasPriceOracle, genL1MessageQueueWithGasPriceOracle } from './contracts'
import { serialize, UnsignedTransaction } from '@ethersproject/transactions'

/**
 *
 * @description takes in a 'tx' and returns the amount of gas that needs to be paid (l2_excecution_cost + l1_data_availability_cost)
 * @param tx this is the transaction that will be sent to L2
 * @param signer this is the signer that will sign the transaction
 * @returns a Bignit representing the cost of gas to be paid on L2 (excecution + data availability cost)
 */
export const estimateGasWithTx = async (tx: ContractTransaction, signer: Signer): Promise<bigint> => {
  let provider = signer.provider as Provider

  let estimatedGasResult = await provider.estimateGas(tx)
  let l2GasExcecutionCost = await getL2GasFeeToPay(estimatedGasResult, provider)
  let serializedUnsignedTx = getSerializedTransaction(await buildUnsignedTransaction(signer, tx))
  let l1DataAvailabilityCost = await getDataAvailabilityGasPrice(serializedUnsignedTx, provider)

  return l2GasExcecutionCost + l1DataAvailabilityCost
}

/**
 *
 * @description Given an estimated gas amount, returns the amount of gas that needs to be paid
 * @param estimatedGasResult this is the estimated gas cost of the transaction
 * @param provider this is a provider instance from ethers.js
 * @returns a Bignit representing the cost of gas to be paid on L2
 */
export const getL2GasFeeToPay = async (estimatedGasResult: bigint, provider: Provider): Promise<bigint> => {
  let current = await getL2GasFee(provider)

  return estimatedGasResult * current
}

/**
 *
 * @description This function returns the current gas price on L2
 * @param provider this is a provider instance from ethers.js
 * @returns current gas price
 */
export const getL2GasFee = async (provider: Provider): Promise<bigint> => {
  let currentGas = (await provider.getFeeData()).gasPrice

  if (!currentGas) {
    throw new Error('There was an error estimating L2 fee')
  }

  return currentGas
}

/**
 *
 * @param data this is the data property of the unsigned transaction to be sent to L2
 * @param provider this is the provider instance
 * @returns a Bignit representing the cost of data availability
 */
export const getDataAvailabilityGasPrice = async (data: BytesLike, provider: Provider): Promise<bigint> => {
  let l1GasOracle = await genL1GasPriceOracle(provider)
  let currentGas = await l1GasOracle.getL1Fee(data)

  if (!currentGas) {
    throw new Error('There was an error estimating L1 fee')
  }

  return currentGas
}

/**
 *
 * @param {SIgner} signer this is the signer that will sign the transaction
 * @param {ContractTransaction} tx this is the transaction that will be sent to L2
 * @returns
 */
export async function buildUnsignedTransaction(signer: Signer, tx: ContractTransaction): Promise<UnsignedTransaction> {
  const nonce = await signer.getNonce()

  return {
    data: tx.data,
    to: tx.to,
    gasPrice: tx.gasPrice,
    gasLimit: tx.gasLimit,
    value: tx.value,
    nonce,
  }
}

/**
 *
 * @param {UnsignedTransaction} tx : UnsignedTransaction to be sent on L2
 * @returns {string} : Serialized transaction (bytes encoded as hex string)
 */
export function getSerializedTransaction(tx: UnsignedTransaction): string {
  return serialize(tx)
}

/**
 *
 * @description this function would be used to estimate the fee for sending a message from 'Chain A' to 'Chain B'
 * @param {number} gasLimit - this is the gas limit for the transaction (in wei) (when excecuting the message in destination chain) (this is important when messeage route is from L1 to L2)
 * @param {Provider} provier - this is the provider for the transaction
 * @returns {number} - this is the estimated fee for sending the message
 * @notice this function is only necessary when sending a message from L1 to L2
 */
export async function estimateCrossDomainMessageFee(gasLimit: number, provider: Provider): Promise<bigint> {
  let messageQueue = genL1MessageQueueWithGasPriceOracle(provider, true)
  let fee = await messageQueue.estimateCrossDomainMessageFee(gasLimit)
  return fee
}
