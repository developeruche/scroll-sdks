"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessageProof = exports.getMessages = exports.getMessageStatus = void 0;
const types_1 = require("./types");
async function getMessageStatus(soure, messageHash, provider, isTestnet) {
    return types_1.MESSAGE_STATUS.PENDING;
}
exports.getMessageStatus = getMessageStatus;
async function getMessages(address, isTestnet) {
}
exports.getMessages = getMessages;
async function getMessageProof(txHash, isTestnet) {
}
exports.getMessageProof = getMessageProof;
//# sourceMappingURL=secretory.js.map