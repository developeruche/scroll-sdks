# Scroll-SDK
[Scroll SDK](https://docs.scroll.io/en/sdk/) is a seamless all-in-one software development kit for carrying out bridging operations between Scroll blockchain (L2) and Ethereum blockchain (L1). With the SDK developers can simply integrate bridging features in their dApp without the hassle to implement from the ground up.

## Testing Locally

** Note: These steps for working on the SDK locally are valid till the SDK is published, Changes would be done on the README.md to that effect
### Core
- Clone the repo to your local machine
- Navigate into the "core" directory
- Create a ".env" file in the root of this directory. You can use the ".env.example" as a guide. Populate the variables with their relevant values.
- Install the TypeScript execution engine if you haven't already. You can use the `npm install -g ts-node` command
- Now generate the types using the `ts-node src/utils/genTypechain.ts` command
- Install the depencies using the `yarn` command
- Build by running the `yarn build` command
- Test by running the `yarn test` command

### Scroll-Bridge-SDK
- Ensure you've built the Core module before attempting this
- Navigate into the "scroll-bridge-sdk" directory
- Create ".env" file in the root of this directory. You can use the ".env.example" as a guide. Populate the variables with their relevant values.
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
3. ERC721 bridging
4. ERC1155 bridging


