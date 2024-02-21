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
  L2MessageQueue,
  Whitelist,
  WrappedEther,
  L2TxFeeVault,



  ScrollChain_testnet,
  L1GatewayRouter_testnet,
  L2GatewayRouter_testnet,
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
  L2MessageQueue_testnet,
  Whitelist_testnet,
  WrappedEther_testnet,
  L2TxFeeVault_testnet,
  L1ScrollMessenger_testnet,
  L2ScrollMessenger_testnet,


  
} from './addresses'

import { L1CustomERC20Gateway__factory, L1ERC1155Gateway__factory, L1ERC721Gateway__factory, L1ETHGateway__factory, L1GasPriceOracle as L1GasPriceOracleInterface, L1GasPriceOracle__factory, L1GatewayRouter__factory, L1MessageQueueWithGasPriceOracle__factory, L1ScrollMessenger__factory, L1StandardERC20Gateway__factory, L1WETHGateway__factory, L2CustomERC20Gateway__factory, L2ERC1155Gateway__factory, L2ERC721Gateway__factory, L2ETHGateway__factory, L2GatewayRouter__factory, L2MessageQueue__factory, L2ScrollMessenger__factory, L2StandardERC20Gateway__factory, L2TxFeeVault__factory, L2WETHGateway__factory, ScrollChain__factory, Whitelist__factory, WrappedEther__factory } from '../typechain'

export let genContractInternal = (abi: Interface, address: string, provider: Provider) => {
  return new ethers.Contract(address, abi, provider)
}

export let genProvider = (url: string) => {
  return new ethers.JsonRpcProvider(url)
}

export let genL1CustomERC20Gateway = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L1CustomERC20Gateway__factory.connect(L1CustomERC20Gateway, provider)
  }

  return L1CustomERC20Gateway__factory.connect(L1CustomERC20Gateway_testnet, provider)
}

export let genL1ERC721Gateway = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L1ERC721Gateway__factory.connect(L1ERC721Gateway, provider)
  }

  return L1ERC721Gateway__factory.connect(L1ERC721Gateway_testnet, provider)
}

export let genL1ERC1155Gateway = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L1ERC1155Gateway__factory.connect(L1ERC1155Gateway, provider)
  }

  return L1ERC1155Gateway__factory.connect(L1ERC1155Gateway_testnet, provider)
}

export let genL1ETHGateway = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L1ETHGateway__factory.connect(L1ETHGateway, provider)
  }

  return L1ETHGateway__factory.connect(L1ETHGateway_testnet, provider)
}

export let genL1GasPriceOracle = (provider: Provider, isTesnet?: boolean): L1GasPriceOracleInterface => {
  if (isTesnet) {
    return L1GasPriceOracle__factory.connect(L1GasPriceOracleAddress, provider)
  }

  return L1GasPriceOracle__factory.connect(L1GasPriceOracleAddress_testnet, provider)
}

export let genL1GatewayRouter = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L1GatewayRouter__factory.connect(L1GatewayRouter, provider)
  }

  return L1GatewayRouter__factory.connect(L1GatewayRouter_testnet, provider)
}

export let genL1MessageQueueWithGasPriceOracle = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L1MessageQueueWithGasPriceOracle__factory.connect(L1MessageQueueWithGasPriceOracle, provider)
  }

  return L1MessageQueueWithGasPriceOracle__factory.connect(L1MessageQueueWithGasPriceOracle_testnet, provider)
}

export let genL1ScrollMessenger = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L1ScrollMessenger__factory.connect(L1ScrollMessenger, provider)
  }

  return L1ScrollMessenger__factory.connect(L1ScrollMessenger_testnet, provider)
}

export let genL1StandardERC20Gateway = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L1StandardERC20Gateway__factory.connect(L1StandardERC20Gateway, provider)
  }

  return L1StandardERC20Gateway__factory.connect(L1StandardERC20Gateway_testnet, provider)
}

export let genL1WETHGateway = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L1WETHGateway__factory.connect(L1WETHGateway, provider)
  }

  return L1WETHGateway__factory.connect(L1WETHGateway_testnet, provider)
}

export let genL2CustomERC20Gateway = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L2CustomERC20Gateway__factory.connect(L2CustomERC20Gateway, provider)
  }

  return L2CustomERC20Gateway__factory.connect(L2CustomERC20Gateway_testnet, provider)
}

export let genL2ERC721Gateway = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L2ERC721Gateway__factory.connect(L2ERC721Gateway, provider)
  }

  return L2ERC721Gateway__factory.connect(L2ERC721Gateway_testnet, provider)
}

export let genL2ERC1155Gateway = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L2ERC1155Gateway__factory.connect(L2ERC1155Gateway, provider)
  }

  return L2ERC1155Gateway__factory.connect(L2ERC1155Gateway_testnet, provider)
}

export let genL2ETHGateway = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L2ETHGateway__factory.connect(L2ETHGateway, provider)
  }

  return L2ETHGateway__factory.connect(L2ETHGateway_testnet, provider)
}

export let genL2GatewayRouter = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L2GatewayRouter__factory.connect(L2GatewayRouter, provider)
  }

  return L2GatewayRouter__factory.connect(L2GatewayRouter_testnet, provider)
}

export let genL2MessageQueue = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L2MessageQueue__factory.connect(L2MessageQueue, provider)
  }

  return L2MessageQueue__factory.connect(L2MessageQueue_testnet, provider)
}

export let genL2ScrollMessenger = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L2ScrollMessenger__factory.connect(L2ScrollMessenger, provider)
  }

  return L2ScrollMessenger__factory.connect(L2ScrollMessenger_testnet, provider)
}

export let genL2StandardERC20Gateway = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L2StandardERC20Gateway__factory.connect(L2StandardERC20Gateway, provider)
  }

  return L2StandardERC20Gateway__factory.connect(L2StandardERC20Gateway_testnet, provider)
}

export let genL2TxFeeVault = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L2TxFeeVault__factory.connect(L2TxFeeVault, provider)
  }

  return L2TxFeeVault__factory.connect(L2TxFeeVault_testnet, provider)
}

export let genL2WETHGateway = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return L2WETHGateway__factory.connect(L2WETHGateway, provider)
  }

  return L2WETHGateway__factory.connect(L2WETHGateway_testnet, provider)
}

export let genScrollChain = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return ScrollChain__factory.connect(ScrollChain, provider)
  }

  return ScrollChain__factory.connect(ScrollChain_testnet, provider)
}

export let genWhitelist = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return Whitelist__factory.connect(Whitelist, provider)
  }

  return Whitelist__factory.connect(Whitelist_testnet, provider)
}

export let genWrappedEther = (
  provider: Provider,
  isTesnet?: boolean
) => {

  if (isTesnet) {
    return WrappedEther__factory.connect(WrappedEther, provider)
  }

  return WrappedEther__factory.connect(WrappedEther, provider)
}
