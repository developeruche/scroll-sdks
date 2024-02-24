export interface Message {
    hello_world: () => void;
}
export interface relayMessageParams {
    from: string;
    to: string;
    value: number;
    nonce: number;
    data: string;
    proof: string;
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
