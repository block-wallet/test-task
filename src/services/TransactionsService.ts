import { BaseService } from "./infrastructure/BaseService";

/**
 * The transaction object
 * Value is of type `number` for simplification
 */
export interface Transaction {
    id: number
    to: string
    from: string
    value: number 
}

export interface TransactionsServiceState {
    transactions: Array<Transaction>
}

/**
 * TransacionsService class 
 * TODO: Complete the addTransaction and the getTransactions methods
 */
export class TransactionsService extends BaseService<TransactionsServiceState> {
    constructor() {
        super({
            transactions: []
        });
    }

    /**
     * It adds a transaction to the list
     */
    public addTransaction(newTransaction: Transaction) {

    }

    /**
     * It returns the list of transactions
     */
    public getListOfTransactions(): Array<Transaction> {
        
    }

}