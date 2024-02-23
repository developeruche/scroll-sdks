"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relayMessage = exports.getMessageProof = exports.getMessages = exports.getMessageStatus = exports.estimateCrossDomainMessageFee = exports.sendMessage = void 0;
const types_1 = require("./types");
async function sendMessage(source, target, value, data, gasLimit, from, fee) {
    return '';
}
exports.sendMessage = sendMessage;
async function estimateCrossDomainMessageFee(gasLimit) {
    return 1;
}
exports.estimateCrossDomainMessageFee = estimateCrossDomainMessageFee;
async function getMessageStatus(soure, messageHash) {
    return types_1.MESSAGE_STATUS.PENDING;
}
exports.getMessageStatus = getMessageStatus;
async function getMessages(address) {
}
exports.getMessages = getMessages;
async function getMessageProof(txHash) {
}
exports.getMessageProof = getMessageProof;
async function relayMessage(params) {
}
exports.relayMessage = relayMessage;
//# sourceMappingURL=cross-chain-interaction.js.map