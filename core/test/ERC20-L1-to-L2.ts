// This is a thesis implementation for bridging ERC20 token from L1 (ethereum) to L2 (Scroll)

import { genL1GatewayRouter, genL1StandardERC20Gateway, genL2GatewayRouter } from "../src/contracts";
import { ethers } from "ethers";
import { ERC20__factory } from "../scroll-contract-types";
import { L1StandardERC20Gateway } from "@src/addresses";



let ERC20_TOKEN_ON_L1 = "0x14C010B30fDEbF9C56629C70D45A7b94c1Dc8d1d"; // this token is deployed on L1
let ERC20_TOKEN_ON_L2 = "0x0efDfBA6Cec9642DC5665f4611ce1D5b3955CD51"; // this token is deployed on L2

let providerL2 = new ethers.JsonRpcProvider('https://sepolia-rpc.scroll.io')
let providerL1 = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/Ytq0aV34dWOA9X6gWhl_6trwmUTb58Ip')
let wallet = new ethers.Wallet('5393eb89457505dc0cea935ef8f3e09b03ecc283234fff38fdf6c8a8d0ccf35a', providerL1)
let walletL2 = new ethers.Wallet('5393eb89457505dc0cea935ef8f3e09b03ecc283234fff38fdf6c8a8d0ccf35a', providerL2)
let L1ERC20TOKEN = ERC20__factory.connect(ERC20_TOKEN_ON_L1, wallet);


const DEMO_ENV = true;

async function main() {

    let l1GatewayRouter = genL1GatewayRouter(wallet, DEMO_ENV);
    let l2GatewayRouter = genL2GatewayRouter(walletL2, DEMO_ENV);

    

    //=========================================
    // Prototyping for ETH bridging (L1 to L2)
    //=========================================
    let depositEther = await l1GatewayRouter["depositETH(address,uint256,uint256)"](
        "0x5c919BCddA25447C168C87252326A43C709ECdBD",
        ethers.parseEther("0.5"),
        170000 // gas limit
        ,{
            value: ethers.parseEther("0.50001"),
          }
    )

    await depositEther.wait();

    let hash = depositEther.hash;

    {}
        console.log("deposit ::     ",depositEther)


        // TODO: estimate gas the same way it is sone in the messaging moudle
        // TODO: prep message hash on bridge
        // TODO: get messeage status









    //========================================= 
    // Prototyping for ETH bridging (L2 to L1)
    //=========================================

    let withdrawETH = await l2GatewayRouter["withdrawETH(address,uint256,uint256)"](
        "0x5c919BCddA25447C168C87252326A43C709ECdBD",
        ethers.parseEther("0.5"),
        0 // gas limit
        , {
            value: ethers.parseEther("0.5000"),
        }
    )
    console.log("withdraw ::",withdrawETH)


        // TODO: prep message hash on bridge HOLD::<>**<>
        // TODO: get messeage status









    //=========================================
    // Prototyping for ERC20 bridging (L1 to L2)
    //=========================================



    
    let l1ERC20Gateway = genL1StandardERC20Gateway(wallet, DEMO_ENV);
    
    console.log("wallet.address ::     ", l1ERC20Gateway.target);

    let approve = await L1ERC20TOKEN.approve(
        l1GatewayRouter.target,
        ethers.parseEther("100")
    );
    let approve_to = await approve.wait();
    
    console.log("approve ::<>     ", approve_to?.hash);




    let depositERC20 = await l1GatewayRouter["depositERC20(address,address,uint256,uint256)"](
        ERC20_TOKEN_ON_L1,
        "0x5c919BCddA25447C168C87252326A43C709ECdBD",
        ethers.parseEther("100"),
        60000, // gas limit [this have to be estinmated by the user (1172793 for first time and 20000 for other times)]
    {
        value: ethers.parseEther("0.01")
    }
    )

    console.log("deposit ::     ", depositERC20)





        // TODO: estimate gas the same way it is sone in the messaging moudle
        // TODO: prep message hash on bridge
        // TODO: get messeage status


    //=========================================
    // Prototyping for ERC20 bridging (L2 to L1)
    //=========================================


    let withdrawERC20 = await l2GatewayRouter["withdrawERC20(address,address,uint256,uint256)"](
        ERC20_TOKEN_ON_L2,
        "0x5c919BCddA25447C168C87252326A43C709ECdBD",
        ethers.parseEther("90"),
        0, // user would be giving an option 
    );

    console.log("withdraw ::", withdrawERC20)

}





main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });