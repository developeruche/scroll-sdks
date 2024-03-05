import { depositERC721, withdrawERC721 } from '@src/assets-bridge/erc721'
import { scrollContracts, genL1ERC721Gateway, genL2ERC721Gateway } from '@scroll-tech/core'
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

const ERC721_TOKEN_ON_L1 = '0xe98C26fE2b4991771E0CDA10535e5FB13BFA4f6d' // this token is deployed on L1
const ERC721_TOKEN_ON_L2 = '' // this token is deployed on L2

const L1ERC721TOKEN = scrollContracts.IERC721__factory.connect(ERC721_TOKEN_ON_L1, walletL1)
const L2ERC721TOKEN = scrollContracts.IERC721__factory.connect(ERC721_TOKEN_ON_L2, walletL2)

const isTestnet = true

let l1GatewayRouter = genL1ERC721Gateway(walletL1, isTestnet)
// let l2GatewayRouter = genL2GatewayRouter(walletL2, isTestnet)

describe('ERC721 Bridging Module', async () => {
  describe('depositERC721', async () => {
    // it('should deposit ERC721 token from L1 to L2', async () => {
    //   const approveTx = await L1ERC721TOKEN.approve(l1GatewayRouter.target, ethers.parseEther('1'))
    //   let approveReceipt = await approveTx.wait()

    //   console.log('approve transaction hash ::   ', approveReceipt?.hash)

    //   const depositTx = await depositERC721(
    //     ERC721_TOKEN_ON_L1,
    //     '0x5c919BCddA25447C168C87252326A43C709ECdBD',
    //     1,
    //     50000, // gas limit [this have to be estimated by the user (1172793 for first time and 20000 for other times)]
    //     ethers.parseEther('0.01'),
    //     walletL1,
    //     isTestnet
    //   )

    //   console.log('deposit transaction ::   ', depositTx)

    //   //   expect(currentMessageStatus).to.be.equal(MESSAGE_STATUS.CONFIRMED)
    // })
  })

  describe('withdrawERC721', async () => {
    it('should withdraw ERC721 token from L2 to L1', async () => {
    
    })
  })
})
