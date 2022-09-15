import { Transaction } from '../../services/TransactionsService';

export interface IAppState {
    transactions: Array<Transaction>;
}

export const initAppState: IAppState = {
    transactions: [],
};