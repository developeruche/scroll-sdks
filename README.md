# Scroll-SDK
Scroll SDK is a seamless all-in-one software development kit for carrying out bridging operations between Scroll blockchain (L2) and Ethereum blockchain (L1). With the SDK developers can simply integrate bridging features in their dApp without the hassle to implement from the ground up.

## Testing Locally
### Core
- Clone the repo to your local machine
- Navigate into the "core" directory
- Install the TypeScript execution engine if you haven't already. You can use the `npm install -g ts-node` command
- Now generate the types using the `ts-node src/utils/genTypechain.ts` command
- Install the depencies using the `yarn` command
- Build by running the `yarn build` command
- Test by running the `yarn test` command

### Scroll-Bridge-SDK
- Ensure you've built the Core module before attempting this
- Navigate into the "scroll-bridge-sdk" directory
- Install the dependencies using `yarn `
- Run the tests using `yarn test`

## Installation

Installation is divided into two components;

### Installation from NPM 


### Installation from Github 


## Usage



## Components

### Core
Provides functionality for:
1. TS contract interface (using type chain)
2. L1 gas estimation
3. Message status for cross-chain messages
4. Holds the official Scroll contracts

### Bridge SDK
Provides functionality for:
1. Cross-chain messaging
2. ERC20 bridging
3. ERC721 Bridging
4. ERC1155 Bridging


