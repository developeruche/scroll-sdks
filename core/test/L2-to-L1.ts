import { genL1MessageQueueWithGasPriceOracle, genL1ScrollMessenger, genL2ScrollMessenger } from '../src/contracts'
import { ethers } from 'ethers'

let targetContract = '0x3840A30AF6Ca8c8A4737806C3E45d85007ba3524'
let providerL2 = new ethers.JsonRpcProvider('https://sepolia-rpc.scroll.io')
let providerL1 = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/Ytq0aV34dWOA9X6gWhl_6trwmUTb58Ip')
let wallet = new ethers.Wallet('5393eb89457505dc0cea935ef8f3e09b03ecc283234fff38fdf6c8a8d0ccf35a', providerL2)

async function run() {
  let scrollMessager = genL2ScrollMessenger(wallet, true)

  let sendMessage = await scrollMessager['sendMessage(address,uint256,bytes,uint256,address)'](
    targetContract,
    0,
    '0xa41368620000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001a74657374696e67206f6e207468652063726f737320636861696e000000000000',
    0,
    wallet.address
  )

  console.log(sendMessage, '<::>(sendMessage)')
  const res = await sendMessage.wait()

  console.log(res, '<::>(fee)')
}

run()
  .then(() => console.log('done'))
  .catch(console.error)
