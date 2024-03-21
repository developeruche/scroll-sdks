import { ethers } from 'ethers'
import { config } from 'dotenv'
import { CrossChainMessenger } from '@src/crossChainMessaging'
import { CHAIN } from '@src/types'
import { genL1MessageQueueWithGasPriceOracle } from '@scroll-tech/core'

config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const SCROLL_RPC_URL = process.env.SCROLL_RPC_URL
let targetContractL1 = '0x3840A30AF6Ca8c8A4737806C3E45d85007ba3524'
let targetContractL2 = '0x0E8ceC32Cbaf8a16Dbc1824870C404d22746f990'

const providerL1 = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL)
const providerL2 = new ethers.JsonRpcProvider(SCROLL_RPC_URL)

const walletL1 = new ethers.Wallet(PRIVATE_KEY!, providerL1)
const walletL2 = new ethers.Wallet(PRIVATE_KEY!, providerL2)
const isTestnet = true

describe('Cross chain interaction ', async () => {

  describe('Send Message to L2', async () => {
    it('should send message to L2 from L1', async () => {
      const messageQueue = genL1MessageQueueWithGasPriceOracle(providerL1, isTestnet)
      let fee = await messageQueue.estimateCrossDomainMessageFee(1)
      const v = Number(fee)
      console.log('fee:', fee.toString())
      let crossChainMessenger = new CrossChainMessenger(walletL2, isTestnet)
      let l1Messenger = await crossChainMessenger.sendMessage(
        CHAIN.L2,
        targetContractL1,
        0,
        '0xa41368620000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001a74657374696e67206f6e207468652063726f737320636861696e000000000000',
        10000000,
        walletL2.address,
        0
      )
      console.log('L1 to L2 Message transaction hash:', l1Messenger.txHash)
    })
  })
})
