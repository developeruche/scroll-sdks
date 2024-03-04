import { ethers } from 'ethers'
import { config } from 'dotenv'

config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const SCROLL_RPC_URL = process.env.SCROLL_RPC_URL

const providerL1 = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL)
const providerL2 = new ethers.JsonRpcProvider(SCROLL_RPC_URL)

const walletL1 = new ethers.Wallet(PRIVATE_KEY!, providerL1)
const walletL2 = new ethers.Wallet(PRIVATE_KEY!, providerL2)
