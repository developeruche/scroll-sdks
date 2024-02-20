import { BigNumberish, BytesLike, ContractTransaction, ethers, Provider, Signer, Contract} from "ethers"
import { genL1GasPriceOracle } from "./contracts";
import { serialize, UnsignedTransaction } from "@ethersproject/transactions";







// takes in a 'tx' and returns the amount of gas that needs to be paid
// (l2_excecution_cost + l1_data_availability_cost)
export const estimateGasWithTx = async (tx: ContractTransaction, signer: Signer): Promise<bigint> => {
    let provider = signer.provider as Provider;


    let estimatedGasResult = await provider.estimateGas(tx);
    let l2GasExcecutionCost = await getL2GasFeeToPay(estimatedGasResult, provider);
    let serializedUnsignedTx = getSerializedTransaction(await buildUnsignedTransaction(signer, tx));
    let l1DataAvailabilityCost = await getDataAvailabilityGasPrice(serializedUnsignedTx, provider);

    
    return l2GasExcecutionCost + l1DataAvailabilityCost;
}





// Given an estimated gas amount, returns the amount of gas that needs to be paid
export const getL2GasFeeToPay = async (estimatedGasResult: bigint, provider: Provider): Promise<bigint> => {
    let current = await getL2GasFee(provider);

    return estimatedGasResult * current;
}


// Returns the current gas price in gwei
export const getL2GasFee = async (
    provider: Provider
): Promise<bigint> => {
    let currentGas = (await provider.getFeeData()).gasPrice;

    if (!currentGas) {
        throw new Error("There was an error estimating L2 fee");
    }

    return currentGas;
}


// Returns the current L1 gas price in gwei
export const getDataAvailabilityGasPrice = async (data: BytesLike, provider: Provider): Promise<bigint> => {
    let l1GasOracle = await genL1GasPriceOracle(provider);
    let currentGas = await l1GasOracle.getL1Fee(data);

    if (!currentGas) {
        throw new Error("There was an error estimating L1 fee");
    }

    return currentGas;
}


export async function buildUnsignedTransaction(signer: Signer, tx: ContractTransaction): Promise<UnsignedTransaction> {
    const nonce = await signer.getNonce();
  
    return {
      data: tx.data,
      to: tx.to,
      gasPrice: tx.gasPrice,
      gasLimit: tx.gasLimit,
      value: tx.value,
      nonce,
    };
}


export function getSerializedTransaction(tx: UnsignedTransaction): string {
    return serialize(tx);
}