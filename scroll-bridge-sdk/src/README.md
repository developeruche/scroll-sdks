## Asset-Bridge
- Helps to bridge assets from L1 to L2 and vice-versa

### ERC-20

Functions for bridging ERC-20 tokens can be found in the `erc20.ts` file. These include:
#### depositERC20
- Used to deposit ERC-20 from L1 to L2

#### withdrawERC20
- Used to withdraw ERC20 from L2 to L1


### ERC-721

Functions for bridging ERC-721 tokens can be found in the `erc721.ts` file. These include: 
#### depositERC721
- Used to deposit ERC-721 from L1 to L2

#### withdrawERC721
- Used to withdraw ERC721 from L2 to L1

### ERC-1155

Functions for bridging ERC-1155 tokens can be found in the `erc1155.ts` file. These include: 
#### depositERC1155
- Used to deposit ERC-1155 from L1 to L2

#### withdrawERC1155
- Used to withdraw ERC1155 from L2 to L1

### updateTokenMapping
- Used to update the token mapping accross chains

### ETH

Functions for bridging ETH can be found in the `eTH.ts` file. These include: 
#### depositETH
- Used to deposit ETH from L1 to L2

#### withdrawETH
- Used to withdraw ETH from L2 to L1


## CrossChainMessaging 
- Helps send messages from L1 to L2 and vice-versa

Contains the following functions:
#### sendMessage
- Used for sending message from 'Chain A' to 'Chain B'

#### relayMessageWithProof
- Used to call the relayMessage function, this last step in the L2 -> L1 route

#### replayMessage
- Used to replay a message

#### dropMessage
- Used to drop a message

## Secretary 
- For querying messages

Contains the following functions:
#### getMessageStatus
- Used to get the message status

#### getMessages
- Used to get all the messsages carried out by the user and the message status

#### getMessageProof
- Used to get message proof