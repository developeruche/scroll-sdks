import { depositERC20, withdrawERC20 } from '@src/assets-bridge/erc20'
import { ethers } from 'ethers'
import { config } from 'dotenv'

const PRIVATE_KEY = process.env.PRIVATE_KEY

let providerL1 = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/Ytq0aV34dWOA9X6gWhl_6trwmUTb58Ip')
let providerL2 = new ethers.JsonRpcProvider('https://sepolia-rpc.scroll.io')

let walletL1 = new ethers.Wallet(PRIVATE_KEY!, providerL1)
let walletL2 = new ethers.Wallet(PRIVATE_KEY!, providerL2)
