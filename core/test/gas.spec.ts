// // ========================================
// // Testing the Estimate gas functionality
// // ========================================

// import { estimateGasWithTx } from '../src/gas'
// import { ethers } from 'ethers'

// // this is a simple abi-interface for ERC20-contract
// const abi = [
//   'function balanceOf(address owner) view returns (uint256)',
//   'function decimals() view returns (uint8)',
//   'function symbol() view returns (string)',
//   'function transfer(address to, uint amount) returns (bool)',
//   'function mint(address to, uint amount) returns (bool)',
//   'event Transfer(address indexed from, address indexed to, uint amount)',
// ]

// // this is the address of the ERC20-contract on SCROLL-text network
// const address = '0xD9E94EB05b35Bd74E341Ffb9dEB26c16F38CeA6f'

// let provider = new ethers.JsonRpcProvider('https://sepolia-rpc.scroll.io')
// const erc20 = new ethers.Contract(address, abi, provider)

// let wallet = new ethers.Wallet('5393eb89457505dc0cea935ef8f3e09b03ecc283234fff38fdf6c8a8d0ccf35a', provider)
// const erc20_rw = new ethers.Contract(address, abi, wallet)

// async function run() {
//   let mint = await erc20_rw.mint.populateTransaction(
//     '0x70ff5c5B1Ad0533eAA5489e0D5Ea01485d530674',
//     ethers.parseEther('1')
//   )
//   let gasCost = await estimateGasWithTx(mint, wallet)

//   console.log('Estimated gas cost: ', gasCost)
// }

// run()
//   .then(() => console.log('done'))
//   .catch(console.error)
