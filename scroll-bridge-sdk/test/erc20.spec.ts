import { depositERC20, withdrawERC20 } from '@src/assets-bridge/erc20'
import { scrollContracts, genL1GatewayRouter, genL2GatewayRouter, genL1MessageQueueWithGasPriceOracle } from '@scroll-tech/core'
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

const ERC20_TOKEN_ON_L1 = '0x14C010B30fDEbF9C56629C70D45A7b94c1Dc8d1d' // this token is deployed on L1
const ERC20_TOKEN_ON_L2 = '0x0efDfBA6Cec9642DC5665f4611ce1D5b3955CD51' // this token is deployed on L2

const L1ERC20TOKEN = scrollContracts.ERC20__factory.connect(ERC20_TOKEN_ON_L1, walletL1)
const L2ERC20TOKEN = scrollContracts.ERC20__factory.connect(ERC20_TOKEN_ON_L2, walletL2)

const isTestnet = true

let l1GatewayRouter = genL1GatewayRouter(walletL1, isTestnet)
let l2GatewayRouter = genL2GatewayRouter(walletL2, isTestnet)

describe('ERC20 Bridging Module', async () => {
  describe('depositERC20', async () => {
    it('should deposit ERC20 token from L1 to L2', async () => {
      const approveTx = await L1ERC20TOKEN.approve(l1GatewayRouter.target, ethers.parseEther('100'))
      let approveReceipt = await approveTx.wait()

      console.log('approve transaction hash ::   ', approveReceipt?.hash)
      let gasLimit = "60000";
      const messageQueue = genL1MessageQueueWithGasPriceOracle(providerL1, isTestnet);
      let fee = await messageQueue.estimateCrossDomainMessageFee(gasLimit);

      const depositTx = await depositERC20(
        ERC20_TOKEN_ON_L1,
        '0x5c919BCddA25447C168C87252326A43C709ECdBD',
        ethers.parseEther('100'),
        Number(gasLimit), // gas limit [this have to be estimated by the user (1172793 for first time and 20000 for other times)]
        fee,
        walletL1,
        isTestnet
      )

      console.log('deposit transaction ::   ', depositTx)

      //   expect(currentMessageStatus).to.be.equal(MESSAGE_STATUS.CONFIRMED)
    })
  })

  describe('withdrawERC20', async () => {
    it('should withdraw ERC20 token from L2 to L1', async () => {
      const approveTx = await L2ERC20TOKEN.approve(l2GatewayRouter.target, ethers.parseEther('10'))
      let approveReceipt = await approveTx.wait()

      console.log('approve transaction hash ::   ', approveReceipt?.hash)

      const withdrawTx = await withdrawERC20(
        ERC20_TOKEN_ON_L2,
        '0x5c919BCddA25447C168C87252326A43C709ECdBD',
        ethers.parseEther('10'),
        60000, // gas limit [this have to be estimated by the user (1172793 for first time and 20000 for other times)]
        0,
        walletL2,
        isTestnet
      )

      console.log('withdrawal transaction ::   ', withdrawTx)
    })
  })
})



