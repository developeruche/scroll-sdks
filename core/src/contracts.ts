import { AddressLike, BaseContract, Contract, ethers, Interface, Provider, Signer } from 'ethers'
import {
  ScrollChain as ScrollChainAddress,
  L1GatewayRouter as L1GatewayRouterAddress,
  L2GatewayRouter as L2GatewayRouterAddress,
  L1ScrollMessenger as L1ScrollMessengerAddress,
  L2ScrollMessenger as L2ScrollMessengerAddress,
  L1ETHGateway as L1ETHGatewayAddress,
  L2ETHGateway as L2ETHGatewayAddress,
  L1WETHGateway as L1WETHGatewayAddress,
  L2WETHGateway as L2WETHGatewayAddress,
  L1StandardERC20Gateway as L1StandardERC20GatewayAddress,
  L2StandardERC20Gateway as L2StandardERC20GatewayAddress,
  L1CustomERC20Gateway as L1CustomERC20GatewayAddress,
  L2CustomERC20Gateway as L2CustomERC20GatewayAddress,
  L1ERC721Gateway as L1ERC721GatewayAddress,
  L2ERC721Gateway as L2ERC721GatewayAddress,
  L1ERC1155Gateway as L1ERC1155GatewayAddress,
  L2ERC1155Gateway as L2ERC1155GatewayAddress,
  L1MessageQueueWithGasPriceOracle as L1MessageQueueWithGasPriceOracleAddress,
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

import {
  L1CustomERC20Gateway__factory,
  L1ERC1155Gateway__factory,
  L1ERC721Gateway__factory,
  L1ETHGateway__factory,
  L1GasPriceOracle as L1GasPriceOracleInterface,
  L1GasPriceOracle__factory,
  L1GatewayRouter__factory,
  L1MessageQueueWithGasPriceOracle__factory,
  L1ScrollMessenger__factory,
  L1StandardERC20Gateway__factory,
  L1WETHGateway__factory,
  L2CustomERC20Gateway__factory,
  L2ERC1155Gateway__factory,
  L2ERC721Gateway__factory,
  L2ETHGateway__factory,
  L2GatewayRouter__factory,
  L2MessageQueue__factory,
  L2ScrollMessenger__factory,
  L2StandardERC20Gateway__factory,
  L2TxFeeVault__factory,
  L2WETHGateway__factory,
  ScrollChain__factory,
  Whitelist__factory,
  WrappedEther__factory,
} from '../scroll-contract-types'

export let genContractInternal = (abi: Interface, address: string, provider: Provider) => {
  return new ethers.Contract(address, abi, provider)
}

export let genProvider = (url: string) => {
  return new ethers.JsonRpcProvider(url)
}

export let genL1CustomERC20Gateway = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L1CustomERC20Gateway__factory.connect(L1CustomERC20GatewayAddress, provider)
  }

  return L1CustomERC20Gateway__factory.connect(L1CustomERC20Gateway_testnet, provider)
}

export let genL1ERC721Gateway = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L1ERC721Gateway__factory.connect(L1ERC721GatewayAddress, provider)
  }

  return L1ERC721Gateway__factory.connect(L1ERC721Gateway_testnet, provider)
}

export let genL1ERC1155Gateway = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L1ERC1155Gateway__factory.connect(L1ERC1155GatewayAddress, provider)
  }

  return L1ERC1155Gateway__factory.connect(L1ERC1155Gateway_testnet, provider)
}

export let genL1ETHGateway = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L1ETHGateway__factory.connect(L1ETHGatewayAddress, provider)
  }

  return L1ETHGateway__factory.connect(L1ETHGateway_testnet, provider)
}

export let genL1GasPriceOracle = (provider: Provider, isTesnet?: boolean): L1GasPriceOracleInterface => {
  if (isTesnet) {
    return L1GasPriceOracle__factory.connect(L1GasPriceOracleAddress, provider)
  }

  return L1GasPriceOracle__factory.connect(L1GasPriceOracleAddress_testnet, provider)
}

export let genL1GatewayRouter = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L1GatewayRouter__factory.connect(L1GatewayRouterAddress, provider)
  }

  return L1GatewayRouter__factory.connect(L1GatewayRouter_testnet, provider)
}

export let genL1MessageQueueWithGasPriceOracle = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L1MessageQueueWithGasPriceOracle__factory.connect(L1MessageQueueWithGasPriceOracle_testnet, provider)
  }

  return L1MessageQueueWithGasPriceOracle__factory.connect(L1MessageQueueWithGasPriceOracleAddress, provider)
}

export let genL1ScrollMessenger = (provider: Provider | Signer, isTesnet?: boolean) => {
  if (isTesnet) {
    return L1ScrollMessenger__factory.connect(L1ScrollMessengerAddress, provider)
  }

  return L1ScrollMessenger__factory.connect(L1ScrollMessenger_testnet, provider)
}

export let genL1StandardERC20Gateway = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L1StandardERC20Gateway__factory.connect(L1StandardERC20GatewayAddress, provider)
  }

  return L1StandardERC20Gateway__factory.connect(L1StandardERC20Gateway_testnet, provider)
}

export let genL1WETHGateway = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L1WETHGateway__factory.connect(L1WETHGatewayAddress, provider)
  }

  return L1WETHGateway__factory.connect(L1WETHGateway_testnet, provider)
}

export let genL2CustomERC20Gateway = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L2CustomERC20Gateway__factory.connect(L2CustomERC20GatewayAddress, provider)
  }

  return L2CustomERC20Gateway__factory.connect(L2CustomERC20Gateway_testnet, provider)
}

export let genL2ERC721Gateway = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L2ERC721Gateway__factory.connect(L2ERC721GatewayAddress, provider)
  }

  return L2ERC721Gateway__factory.connect(L2ERC721Gateway_testnet, provider)
}

export let genL2ERC1155Gateway = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L2ERC1155Gateway__factory.connect(L2ERC1155GatewayAddress, provider)
  }

  return L2ERC1155Gateway__factory.connect(L2ERC1155Gateway_testnet, provider)
}

export let genL2ETHGateway = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L2ETHGateway__factory.connect(L2ETHGatewayAddress, provider)
  }

  return L2ETHGateway__factory.connect(L2ETHGateway_testnet, provider)
}

export let genL2GatewayRouter = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L2GatewayRouter__factory.connect(L2GatewayRouterAddress, provider)
  }

  return L2GatewayRouter__factory.connect(L2GatewayRouter_testnet, provider)
}

export let genL2MessageQueue = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L2MessageQueue__factory.connect(L2MessageQueue, provider)
  }

  return L2MessageQueue__factory.connect(L2MessageQueue_testnet, provider)
}

export let genL2ScrollMessenger = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L2ScrollMessenger__factory.connect(L2ScrollMessengerAddress, provider)
  }

  return L2ScrollMessenger__factory.connect(L2ScrollMessenger_testnet, provider)
}

export let genL2StandardERC20Gateway = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L2StandardERC20Gateway__factory.connect(L2StandardERC20GatewayAddress, provider)
  }

  return L2StandardERC20Gateway__factory.connect(L2StandardERC20Gateway_testnet, provider)
}

export let genL2TxFeeVault = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L2TxFeeVault__factory.connect(L2TxFeeVault, provider)
  }

  return L2TxFeeVault__factory.connect(L2TxFeeVault_testnet, provider)
}

export let genL2WETHGateway = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return L2WETHGateway__factory.connect(L2WETHGatewayAddress, provider)
  }

  return L2WETHGateway__factory.connect(L2WETHGateway_testnet, provider)
}

export let genScrollChain = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return ScrollChain__factory.connect(ScrollChainAddress, provider)
  }

  return ScrollChain__factory.connect(ScrollChain_testnet, provider)
}

export let genWhitelist = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return Whitelist__factory.connect(Whitelist, provider)
  }

  return Whitelist__factory.connect(Whitelist_testnet, provider)
}

export let genWrappedEther = (provider: Provider, isTesnet?: boolean) => {
  if (isTesnet) {
    return WrappedEther__factory.connect(WrappedEther, provider)
  }

  return WrappedEther__factory.connect(WrappedEther, provider)
}
