import { getMessageProof, getMessageStatus, getMessages } from '@src/secretary'
import { expect } from './setup'
import { CHAIN, MESSAGE_STATUS } from '@src/types'
import { ethers } from 'ethers'
import { config } from 'dotenv'

config()

// Constants
const TEST_L1_MESSAGE_HASH_VALID_TESTNET = '0xa7edab620143ca0414920db2b2323e2b5078f489ca62ceb9147bc7489cf7f118'
const TEST_L1_MESSAGE_HASH_INVALID_TESTNET = '0xa7edab620143ca0414920db2b2323e2b5078f489ca62ceb9147bc7489cf7f114'
const TEST_L2_MESSAGE_HASH_VALID_TESTNET = '0x887f807b9830d211361b99c88ef92da7bc1fdcd4e481524c9a8d5308c7ee2330'
const TEST_L2_MESSAGE_HASH_INVALID_TESTNET = '0x02ba80ee5da4ca3b89061793fdf8b62dd1bb1873cfcdcac6e6c73b511f55bdf2' // this is a pending tx

const PRIVATE_KEY = process.env.PRIVATE_KEY
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const SCROLL_RPC_URL = process.env.SCROLL_RPC_URL

let providerL1 = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL)
let providerL2 = new ethers.JsonRpcProvider(SCROLL_RPC_URL)
let walletL1 = new ethers.Wallet(PRIVATE_KEY!, providerL1)
let walletL2 = new ethers.Wallet(PRIVATE_KEY!, providerL2)

describe('Secretory Module', async () => {
  describe('getMessageStatus', async () => {
    it('should test getting message status on TESTNET (L1) -> CONFIRMED', async () => {
      let currentMessageStatus = await getMessageStatus(
        CHAIN.L1,
        TEST_L1_MESSAGE_HASH_VALID_TESTNET,
        providerL1,
        providerL2,
        true
      )
      expect(currentMessageStatus).to.be.equal(MESSAGE_STATUS.CONFIRMED)
    })

    it('should test getting message status on TESTNET (L1) -> CONFIRMED', async () => {
      let currentMessageStatus = await getMessageStatus(
        CHAIN.L1,
        TEST_L1_MESSAGE_HASH_INVALID_TESTNET,
        providerL1,
        providerL2,
        true
      )
      expect(currentMessageStatus).to.be.equal(MESSAGE_STATUS.PENDING)
    })

    it('should test getting message status on TESTNET (L2) -> CONFIRMED', async () => {
      let currentMessageStatus = await getMessageStatus(
        CHAIN.L2,
        TEST_L2_MESSAGE_HASH_VALID_TESTNET,
        providerL1,
        providerL2,
        true
      )
      expect(currentMessageStatus).to.be.equal(MESSAGE_STATUS.CONFIRMED)
    })

    it('should test getting message status on TESTNET (L2) -> PENDING', async () => {
      let currentMessageStatus = await getMessageStatus(
        CHAIN.L2,
        TEST_L2_MESSAGE_HASH_INVALID_TESTNET,
        providerL1,
        providerL2,
        true
      )
      expect(currentMessageStatus).to.be.equal(MESSAGE_STATUS.PENDING)
    })
  })

  describe('getMessages', async () => {
    it('should should get messages and address has sent (MAINNET)', async () => {
      let messages = await getMessages('0x453aF7A5D1CAA3e911Da2493edCde02f91C400BD', false)

      console.log(messages.data.data)
    })

    it('should should get messages and address has sent (TESTNNET)', async () => {
      let messages = await getMessages('0x5c919BCddA25447C168C87252326A43C709ECdBD', true)
      console.log(messages.data.data)
    })
  })

  describe('getMessageProof', async () => {
    it('should should get messages and address has sent (MAINNET)', async () => {
      let messages = await getMessageProof('0x703df2d1bbac6c8fffdbbf4f3ed5aa573acf71b4d1ca017d34a2b15da513ee65', false)
      console.log(messages.data)
    })

    it('should should get messages and address has sent (TESTNET)', async () => {
      let messages = await getMessageProof('0x50f5454b0fcc1591ada4de963f31952d04d4a47a360500c7cd7961ec48feeca7', true)
      console.log(messages.data)
    })
  })
})

function done() {
  throw new Error('Function not implemented.')
}
