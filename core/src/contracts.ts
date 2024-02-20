import { AddressLike, BaseContract, Contract, ethers, Interface, Provider } from 'ethers'
import {
  ScrollChain,
  L1GatewayRouter,
  L2GatewayRouter,
  L1ScrollMessenger,
  L2ScrollMessenger,
  L1ETHGateway,
  L2ETHGateway,
  L1WETHGateway,
  L2WETHGateway,
  L1StandardERC20Gateway,
  L2StandardERC20Gateway,
  L1CustomERC20Gateway,
  L2CustomERC20Gateway,
  L1ERC721Gateway,
  L2ERC721Gateway,
  L1ERC1155Gateway,
  L2ERC1155Gateway,
  L1MessageQueueWithGasPriceOracle,
  L1GasPriceOracle as L1GasPriceOracleAddress,
  L1MessageQueue,
  Whitelist,
  WrappedEther,
  L2TxFeeVault,



  ScrollChain_testnet,
  L1GatewayRouter_testnet,
  L2GatewayRouter_testnet,
  // L1ScrollMessenger_testnet,
  // L2ScrollMessenger_testnet,
  L1ETHGateway_testnet,
  L2ETHGateway_testnet,
  L1WETHGateway_testnet,
  L2WETHGateway_testnet,
  L1StandardERC20Gateway_testnet,
  L2StandardERC20Gateway_testnet,
  L1CustomERC20Gateway_testnet,
  L2CustomERC20Gateway_testnet,
  L1ERC721Gateway_testnet,
  L2ERC721Gateway_testnet,
  L1ERC1155Gateway_testnet,
  L2ERC1155Gateway_testnet,
  L1MessageQueueWithGasPriceOracle_testnet,
  L1GasPriceOracle_testnet as L1GasPriceOracleAddress_testnet,
  L1MessageQueue_testnet,
  Whitelist_testnet,
  WrappedEther_testnet,
  L2TxFeeVault_testnet,


  
} from './addresses'

import { L1GasPriceOracle, L1GasPriceOracle__factory } from '../typechain'

export let genContractInternal = (abi: Interface, address: string, provider: Provider) => {
  return new ethers.Contract(address, abi, provider)
}

export let genProvider = (url: string) => {
  return new ethers.JsonRpcProvider(url)
}

// export let genL1CustomERC20Gateway = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L1CustomERC20Gateway__factory, SCROLL_SEOLIA_L1_ERC20_CustomGATEWAY, provider)
//   }

//   return genContractInternal(L1CustomERC20Gateway.abi, L1_ERC20_CUSTOM_GATEWAY, provider)
// }

// export let genL1ERC721Gateway = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L1ERC721Gateway.abi, SCROLL_SEOLIA_L1_ERC721_Gateway, provider)
//   }

//   return genContractInternal(L1ERC721Gateway.abi, L1_ERC721_GATEWAY, provider)
// }

// export let genL1ERC1155Gateway = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L1ERC1155Gateway.abi, SCROLL_SEOLIA_L1_ERC1155_GATEWAY, provider)
//   }

//   return genContractInternal(L1ERC1155Gateway.abi, L1_ERC1155_GATEWAY, provider)
// }

// export let genL1ETHGateway = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L1ETHGateway.abi, SCROLL_SEOLIA_L1_ETH_GATEWAY, provider)
//   }

//   return genContractInternal(L1ETHGateway.abi, L1_ETH_GATEWAY, provider)
// }

export let genL1GasPriceOracle = (provider: Provider, isTesnet?: boolean): L1GasPriceOracle => {
  if (isTesnet) {
    return L1GasPriceOracle__factory.connect(L1GasPriceOracleAddress, provider)
  }

  return L1GasPriceOracle__factory.connect(L1GasPriceOracleAddress_testnet, provider)
}

// export let genL1GatewayRouter = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L1GatewayRouter.abi, SCROLL_SEOLIA_L1_GATEWAY_ROUTER, provider)
//   }

//   return genContractInternal(L1GatewayRouter.abi, L1_GATWAY_ROUTER, provider)
// }

// export let genL1MessageQueueWithGasPriceOracle = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L1MessageQueueWithGasPriceOracle.abi, SCROLL_SEOLIA_L1_MESSAGE_QUEUE_WITH_GAS_PRICE_ORACLE, provider)
//   }

//   return genContractInternal(L1MessageQueueWithGasPriceOracle, L1_MESSAGE_QUEUE_WITH_GAS_PRICE_ORACLE, provider)
// }

// export let genL1ScrollMessenger = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L1ScrollMessenger.abi, SCROLL_SEOLIA_L1_MESSAGER, provider)
//   }

//   return genContractInternal(L1ScrollMessenger.abi, L1_MESSAGER, provider)
// }

// export let genL1StandardERC20Gateway = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L1StandardERC20Gateway.abi, SCROLL_SEOLIA_L1_ERC20_StandardGATEWAY, provider)
//   }

//   return genContractInternal(L1StandardERC20Gateway.abi, L1_ERC20_STANDARD_GATEWAY, provider)
// }

// export let genL1WETHGateway = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L1WETHGateway.abi, SCROLL_SEOLIA_L1_WETH_GATEWAY, provider)
//   }

//   return genContractInternal(L1WETHGateway.abi, L1_WETH_GATEWAY, provider)
// }

// export let genL2CustomERC20Gateway = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L2CustomERC20Gateway.abi, SCROLL_SEOLIA_L2_ERC20_CustomGATEWAY, provider)
//   }

//   return genContractInternal(L2CustomERC20Gateway.abi, L2_ERC20_CUSTOM_GATEWAY, provider)
// }

// export let genL2ERC721Gateway = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L2ERC721Gateway.abi, SCROLL_SEOLIA_L2_ERC721_Gateway, provider)
//   }

//   return genContractInternal(L2ERC721Gateway.abi, L2_ERC721_GATEWAY, provider)
// }

// export let genL2ERC1155Gateway = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L2ERC1155Gateway.abi, SCROLL_SEOLIA_L2_ERC1155_GATEWAY, provider)
//   }

//   return genContractInternal(L2ERC1155Gateway.abi, L2_ERC1155_GATEWAY, provider)
// }

// export let genL2ETHGateway = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L2ETHGateway.abi, SCROLL_SEOLIA_L2_ETH_GATEWAY, provider)
//   }

//   return genContractInternal(L2ETHGateway.abi, L2_ETH_GATEWAY, provider)
// }

// export let genL2GatewayRouter = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L2GatewayRouter.abi, SCROLL_SEOLIA_L2_GATEWAY_ROUTER, provider)
//   }

//   return genContractInternal(L2GatewayRouter.abi, L2_GATWAY_ROUTER, provider)
// }

// export let genL2MessageQueue = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L2MessageQueue.abi, SCROLL_SEOLIA_MESSAGE_QUEUE, provider)
//   }

//   return genContractInternal(L2MessageQueue.abi, MESSAGE_QUEUE, provider)
// }

// export let genL2ScrollMessenger = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L2ScrollMessenger.abi, SCROLL_SEOLIA_L2_MESSAGER, provider)
//   }

//   return genContractInternal(L2ScrollMessenger.abi, L2_MESSAGER, provider)
// }

// export let genL2StandardERC20Gateway = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L2StandardERC20Gateway.abi, SCROLL_SEOLIA_L2_ERC20_StandardGATEWAY, provider)
//   }

//   return genContractInternal(L2StandardERC20Gateway.abi, L2_ERC20_STANDARD_GATEWAY, provider)
// }

// export let genL2TxFeeVault = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L2TxFeeVault.abi, SCROLL_SEOLIA_TRANSACTION_FEE_VAULT, provider)
//   }

//   return genContractInternal(L2TxFeeVault.abi, TRANSACTION_FEE_VAULT, provider)
// }

// export let genL2WETHGateway = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(L2WETHGateway.abi, SCROLL_SEOLIA_L2_WETH_GATEWAY, provider)
//   }

//   return genContractInternal(L2WETHGateway.abi, L2_WETH_GATEWAY, provider)
// }

// export let genScrollChain = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(ScrollChain.abi, SCROLL_SEOLIA_SCROLL_ROLLUP, provider)
//   }

//   return genContractInternal(ScrollChain.abi, SROLL_ROLLUP, provider)
// }

// export let genWhitelist = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(Whitelist.abi, SCROLL_SEOLIA_WHITELIST, provider)
//   }

//   return genContractInternal(Whitelist.abi, WHITELIST, provider)
// }

// export let genWrappedEther = (
//   provider: Provider,
//   isTesnet?: boolean
// ) => {

//   if (isTesnet) {
//     return genContractInternal(WrappedEther.abi, SCROLL_SEOLIA_WETH_L2, provider)
//   }

//   return genContractInternal(WrappedEther.abi, WETH_L2, provider)
// }
