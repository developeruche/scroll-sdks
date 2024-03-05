import { genL1MessageQueueWithGasPriceOracle, genL1ScrollMessenger } from '../src/contracts'
import { ethers } from 'ethers'

let targetContract = '0x0E8ceC32Cbaf8a16Dbc1824870C404d22746f990'
let providerL2 = new ethers.JsonRpcProvider('https://sepolia-rpc.scroll.io')
let providerL1 = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/Ytq0aV34dWOA9X6gWhl_6trwmUTb58Ip')
let wallet = new ethers.Wallet('5393eb89457505dc0cea935ef8f3e09b03ecc283234fff38fdf6c8a8d0ccf35a', providerL1)

async function run() {
  let scrollMessager = genL1ScrollMessenger(wallet, true)

  let messageQueue = genL1MessageQueueWithGasPriceOracle(providerL1, true)

  let fee = await messageQueue.estimateCrossDomainMessageFee(1000000)

  console.log(fee.toString(), '<::>(fee)')

  let sendMessage = await scrollMessager['sendMessage(address,uint256,bytes,uint256,address)'](
    targetContract,
    0,
    '0xa41368620000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001a74657374696e67206f6e207468652063726f737320636861696e000000000000',
    1000000,
    wallet.address,
    {
      value: fee,
    }
  )

  console.log(sendMessage, '<::>(sendMessage)')
  const res = await sendMessage.wait()

  console.log(res, '<::>(fee)')
}

run()
  .then(() => console.log('done'))
  .catch(console.error)
