# Core SDK
Provides functionality for:
1. TS contract interface (using type chain)
2. L1 gas estimation
3. Message status for cross-chain messages
4. Holds the official Scroll contracts

## Testing Locally
- Clone the repo to your local machine
- Navigate into the "core" directory
- Install the depencies using the `yarn` command
- Install the TypeScript execution engine if you haven't already. You can use the `npm install -g ts-node` command
- Now generate the types using the `ts-node src/utils/genTypechain.ts` command
- Build by running the `yarn build` command
- Test by running the `yarn test` command
