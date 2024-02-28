export interface L2MessageProof {
    merkleProof: string;
    batchIndex: number;
}
export interface relayMessageParams {
    from: string;
    to: string;
    value: number;
    nonce: number;
    data: string;
    proof: L2MessageProof;
}
export declare enum CHAIN {
    L1 = "L1",
    L2 = "L2"
}
export declare enum MESSAGE_STATUS {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    FAILED = "FAILED"
}
export interface SendMessageResponse {
    txHash: string;
    messageHash: string;
}
