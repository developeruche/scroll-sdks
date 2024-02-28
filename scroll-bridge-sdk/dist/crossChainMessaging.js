"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropMessage = exports.replayMessage = exports.relayMessageWithProof = exports.sendMessage = void 0;
async function sendMessage(source, target, value, data, gasLimit, from, fee, signer) {
    const messageResponse = {
        txHash: "",
        messageHash: ""
    };
    return messageResponse;
}
exports.sendMessage = sendMessage;
async function relayMessageWithProof(params, signer) {
}
exports.relayMessageWithProof = relayMessageWithProof;
async function replayMessage(from, to, value, messageNonce, data, gasLimit, refundAddress, signer) {
}
exports.replayMessage = replayMessage;
async function dropMessage(from, to, value, messageNonce, data) {
}
exports.dropMessage = dropMessage;
//# sourceMappingURL=crossChainMessaging.js.map