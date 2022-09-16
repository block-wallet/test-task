import { Transaction } from '../../services/TransactionsService';

export interface IAppState {
    transactions: Array<Omit<Transaction,"id">>;
}

export const initAppState: IAppState = {
    transactions: [],

};