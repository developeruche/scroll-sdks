"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withdrawERC20 = exports.depositERC20 = void 0;
const core_1 = require("@scroll-tech/core");
async function depositERC20(target, recipient, amount, gasLimit, value, signer, isTestnet) {
    let l1GatewayRouter = (0, core_1.genL1GatewayRouter)(signer, isTestnet);
    let depositERC20 = await l1GatewayRouter["depositERC20(address,address,uint256,uint256)"](target, recipient, amount, gasLimit, {
        value
    });
    await depositERC20.wait();
    const messageResponse = {
        txHash: depositERC20.hash,
        messageHash: ""
    };
    return messageResponse;
}
exports.depositERC20 = depositERC20;
async function withdrawERC20(target, recipient, amount, gasLimit, value, signer, isTestnet) {
    const messageResponse = {
        txHash: "",
        messageHash: ""
    };
    return messageResponse;
}
exports.withdrawERC20 = withdrawERC20;
//# sourceMappingURL=erc20.js.map