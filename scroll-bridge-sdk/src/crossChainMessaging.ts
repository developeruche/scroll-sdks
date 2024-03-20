import { encodeDomainCalldata, genL1ScrollMessenger, genL2ScrollMessenger, hashRelayMessage, queryMessageHash } from '@scroll-tech/core'
import { CHAIN, SendMessageResponse, relayMessageParams } from './types'
import { ContractTransactionResponse, Signer, Provider, ContractTransactionReceipt, Contract, BaseContract } from 'ethers'

export class CrossChainMessenger {
  private messengerL1: any;
  private messengerL2: any;

  /**
   * @description this is the constructor
   * @param {Signer} signer - this is the signer for the transaction
   * @param {boolean} isTestnet this is a flag to indicate if the network is a testnet or not
   */
  constructor(signer: Signer, isTestnet: boolean) {
    this.messengerL1 = genL1ScrollMessenger(signer, isTestnet);
    this.messengerL2 = genL2ScrollMessenger(signer, isTestnet);
  }

  /**
   * @description this function is used for sending message from 'Chain A' to 'Chain B'
   * @param {CHAIN} source this is the source chain
   * @param {string} target - this is the address of the contract recieving this message
   * @param {number} value - this is the amount of ether to be sent along with the message
   * @param {string} data - this is the data to be sent along with the message (in hex) (e.g. '0xa413686200)
   * @param {number} gasLimit - this is the gas limit for the transaction (in wei) (when excecuting the message in destination chain) (this is important when messeage route is from L1 to L2)
   * @param {number} fee - this is the fee for sending the message
   * @returns {Promise<SendMessageResponse>} - this is the message hash
   */
  async sendMessage(
    source: CHAIN,
    target: string,
    value: number,
    data: string,
    gasLimit: number,
    from: string,
    fee: number
  ): Promise<SendMessageResponse> {
    let sendMessageTx: ContractTransactionResponse;

    if (source === CHAIN.L1) {
      sendMessageTx = await this.messengerL1['sendMessage(address,uint256,bytes,uint256,address)'](
        target,
        value,
        data,
        gasLimit,
        from,
        {
          value: value + fee,
        }
      );
    } else if (source === CHAIN.L2) {
      sendMessageTx = await this.messengerL2['sendMessage(address,uint256,bytes,uint256,address)'](
        target,
        value,
        data,
        gasLimit,
        from,
        {
          value: value + fee,
        }
      );
    } else {
      throw new Error('Invalid source chain');
    }

    const receipt = await sendMessageTx.wait();
    const messageHash = queryMessageHash(receipt!, this.messengerL1); // Replace with actual function

    const messageResponse: SendMessageResponse = {
      txHash: sendMessageTx.hash,
      messageHash,
    };

    return messageResponse;
  }

  /**
   * This function is used to call the relayMessage function, this last step in the L2 -> L1 route
   * @param {relayMessageParams} params - this is the parameters for the relayMessage function
   */
  async relayMessageWithProof(
    params: relayMessageParams
  ): Promise<ContractTransactionResponse> {
    let relayMessageTx: ContractTransactionResponse;

    relayMessageTx = await this.messengerL1.relayMessageWithProof(
      params.from,
      params.to,
      params.value,
      params.nonce,
      params.data,
      params.proof
    );

    return relayMessageTx;
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
   */
  async replayMessage(
    from: string,
    to: string,
    value: number,
    messageNonce: number,
    data: string,
    gasLimit: number,
    refundAddress: string
  ): Promise<ContractTransactionResponse> {
    let replayMessageTx: ContractTransactionResponse;

    replayMessageTx = await this.messengerL1.scrollMessenger.replayMessage(
      from,
      to,
      value,
      messageNonce,
      data,
      gasLimit,
      refundAddress
    );

    return replayMessageTx;
  }

  /**
   * @description this function is used to drop a message
   * @param {string} from - this is the address of the sender
   * @param {string} to - this is the address of the receiver
   * @param {number} value - this is the value of the message
   * @param {number} messageNonce - this is the nonce of the message
   * @param {string} data - this is the data of the message
   */
  async dropMessage(
    from: string,
    to: string,
    value: number,
    messageNonce: number,
    data: string
  ): Promise<SendMessageResponse> {
    let dropMessageTx: ContractTransactionResponse;

    dropMessageTx = await this.messengerL1.dropMessage(
      from,
      to,
      value,
      messageNonce,
      data
    );

    const dropMessageResponseTx: SendMessageResponse = {
      txHash: dropMessageTx.hash,
      messageHash: '',
    };

    return dropMessageResponseTx;
  }
}
