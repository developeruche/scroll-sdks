import { genL1ScrollMessenger, genL2ScrollMessenger } from '@scroll-tech/core'
import { CHAIN, SendMessageResponse, relayMessageParams } from './types'
import { ContractTransactionResponse, Signer, Provider } from 'ethers'

/**
 * @description this function is used for sending message from 'Chain A' to 'Chain B'
 * @param {CHAIN} source this is the source chain
 * @param {string} target - this is the address of the contract recieving this message
 * @param {number} value - this is the amount of ether to be sent along with the message
 * @param {string} data - this is the data to be sent along with the message (in hex) (e.g. '0xa413686200)
 * @param {number} gasLimit - this is the gas limit for the transaction (in wei) (when excecuting the message in destination chain) (this is important when messeage route is from L1 to L2)
 * @param {string} refundAddress - this is the address the remaining gas for excecution would be sent to
 * @param {number} fee - this is the fee for sending the message
 * @param {Signer} signer - this is the signer for the transaction
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 * @returns {Promise<SendMessageResponse>} - this is the message hash
 */
export async function sendMessage(
  source: CHAIN,
  target: string,
  value: number,
  data: string,
  gasLimit: number,
  from: string,
  fee: number,
  isTestnet: boolean,
  signer: Signer
): Promise<SendMessageResponse> {
  let sendMessageTx: ContractTransactionResponse
  if (source === CHAIN.L1) {
    const messagerL1 = genL1ScrollMessenger(signer, isTestnet)
    sendMessageTx = await messagerL1['sendMessage(address,uint256,bytes,uint256,address)'](
      target,
      value,
      data,
      gasLimit,
      from,
      {
        value: value + fee,
      }
    )
  } else if (source === CHAIN.L2) {
    const messagerL2 = genL2ScrollMessenger(signer, isTestnet);
    sendMessageTx = await messagerL2['sendMessage(address,uint256,bytes,uint256,address)'](
      target,
      value,
      data,
      gasLimit,
      from,
      {
        value: value + fee,
      }
    )
  } else {
    throw new Error('invalid source chain')
  }


  const messageResponse: SendMessageResponse = {
    txHash: sendMessageTx.hash,
    messageHash: '',
  }

  return messageResponse;
}

/**
 * This function is used to call the relayMessage function, this last step in the L2 -> L1 route
 * @param {relayMessageParams} params - this is the parameters for the relayMessage function
 * @param {Signer} signer - this is the signer for the transaction
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 */
export async function relayMessageWithProof(
  params: relayMessageParams,
  signer: Signer,
  isTestnet: boolean
): Promise<SendMessageResponse> {
  let relayMessageTx: ContractTransactionResponse
  const scrollMessenger = genL1ScrollMessenger(signer, isTestnet)
  relayMessageTx = await scrollMessenger.relayMessageWithProof(
    params.from,
    params.to,
    params.value,
    params.nonce,
    params.data,
    params.proof
  );

  const relayMessageResponseTx: SendMessageResponse = {
    txHash: relayMessageTx.hash,
    messageHash: '',
  }

  return relayMessageResponseTx;
}

/**
 * @description this function would be used to replay a message
 * @param {string} from - this is the address of the sender
 * @param {string} to - this is the address of the receiver
 * @param {number} value - this is the value of the message
 * @param {number} messageNonce - this is the nonce of the message
 * @param {string} data - this is the data of the message
 * @param {number} gasLimit - this is the gas limit for the transaction (in wei) (when excecuting the message in destination chain) (this is important when messeage route is from L1 to L2)
 * @param {string} refundAddress - this is the address the remaining gas for excecution would be sent to
 * @param {Signer} signer - this is the signer for the transaction
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 */
export async function replayMessage(
  from: string,
  to: string,
  value: number,
  messageNonce: number,
  data: string,
  gasLimit: number,
  refundAddress: string,
  signer: Signer,
  isTestnet: boolean
): Promise<SendMessageResponse> {
  let replayMessageTx: ContractTransactionResponse;
  const scrollMessenger = genL1ScrollMessenger(signer, isTestnet);
  replayMessageTx = await scrollMessenger.replayMessage(from, to, value, messageNonce, data, gasLimit, refundAddress);

  const replayMessageResponseTx: SendMessageResponse = {
    txHash: replayMessageTx.hash,
    messageHash: '',
  }
  
  return replayMessageResponseTx
}

/**
 * @description this function is used to drop a message
 * @param {string} from - this is the address of the sender
 * @param {string} to - this is the address of the receiver
 * @param {number} value - this is the value of the message
 * @param {number} messageNonce - this is the nonce of the message
 * @param {string} data - this is the data of the message
 * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
 */
export async function dropMessage(
  from: string,
  to: string,
  value: number,
  messageNonce: number,
  data: string,
  isTestnet: boolean,
  signer: Signer
): Promise<SendMessageResponse> {
  let dropMessageTx: ContractTransactionResponse;
  const scrollMessenger = genL1ScrollMessenger(signer, isTestnet);
  dropMessageTx = await scrollMessenger.dropMessage(from, to, value, messageNonce, data);
  
  const dropMessageResponseTx: SendMessageResponse = {
    txHash: dropMessageTx.hash,
    messageHash: '',
  }

  return dropMessageResponseTx
}
