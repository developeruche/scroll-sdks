"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropMessage = exports.replayMessage = exports.relayMessageWithProof = exports.getMessageProof = exports.getMessages = exports.getMessageStatus = exports.estimateCrossDomainMessageFee = exports.sendMessage = void 0;
const types_1 = require("./types");
async function sendMessage(source, target, value, data, gasLimit, from, fee, signer) {
    return '';
}
exports.sendMessage = sendMessage;
async function estimateCrossDomainMessageFee(gasLimit, provier) {
    return 1;
}
exports.estimateCrossDomainMessageFee = estimateCrossDomainMessageFee;
async function getMessageStatus(soure, messageHash, provider) {
    return types_1.MESSAGE_STATUS.PENDING;
}
exports.getMessageStatus = getMessageStatus;
async function getMessages(address) {
}
exports.getMessages = getMessages;
async function getMessageProof(txHash) {
}
exports.getMessageProof = getMessageProof;
async function relayMessageWithProof(params, signer) {
}
exports.relayMessageWithProof = relayMessageWithProof;
async function replayMessage(from, to, value, messageNonce, data, gasLimit, refundAddress, signer) {
}
exports.replayMessage = replayMessage;
async function dropMessage(from, to, value, messageNonce, data) {
}
exports.dropMessage = dropMessage;
//# sourceMappingURL=cross-chain-interaction.js.map