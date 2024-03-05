import { genL1ERC721Gateway } from '../src/contracts'
import { ethers } from 'ethers'

let ERC721_L1 = '0xe98C26fE2b4991771E0CDA10535e5FB13BFA4f6d'
let ERC721_L2 = ''

let providerL1 = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/Ytq0aV34dWOA9X6gWhl_6trwmUTb58Ip')
let providerL2 = new ethers.JsonRpcProvider('https://sepolia-rpc.scroll.io')

let wallet = new ethers.Wallet('5393eb89457505dc0cea935ef8f3e09b03ecc283234fff38fdf6c8a8d0ccf35a', providerL1)
let walletL2 = new ethers.Wallet('5393eb89457505dc0cea935ef8f3e09b03ecc283234fff38fdf6c8a8d0ccf35a', providerL2)

async function main() {
  let l1ERC721gateway = genL1ERC721Gateway(wallet, true)

  let depositERC721 = await l1ERC721gateway['depositERC721(address,address,uint256,uint256)'](
    ERC721_L1,
    wallet.address,
    1,
    50000, // gas limit
    {
      value: ethers.parseEther('0.00001'),
    }
  )

  console.log('deposit ::     ', depositERC721)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
