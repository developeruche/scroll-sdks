import { ethers } from 'ethers'
import { config } from 'dotenv'
import { sendMessage, replayMessage, relayMessageWithProof, dropMessage } from '@src/crossChainMessaging'
import { CHAIN } from '@src/types'

config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const SCROLL_RPC_URL = process.env.SCROLL_RPC_URL
let targetContract = '0x0E8ceC32Cbaf8a16Dbc1824870C404d22746f990'

const providerL1 = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL)
const providerL2 = new ethers.JsonRpcProvider(SCROLL_RPC_URL)

const walletL1 = new ethers.Wallet(PRIVATE_KEY!, providerL1)
const walletL2 = new ethers.Wallet(PRIVATE_KEY!, providerL2)
const isTestnet = true

describe('L2 to L1 Message ', async () => {
  describe('sendMessage', async () => {
    it('should send message', async () => {
      let l1Messenger = await sendMessage(
        CHAIN.L2,
        targetContract,
        0,
        '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001754657374696e6720666f722073656e644d657373616765000000000000000000',
        10000000,
        walletL2.address,
        0,
        walletL2,
        isTestnet
      )
      console.log('L1 to L2 Message', l1Messenger.txHash)
    })
  })
})
