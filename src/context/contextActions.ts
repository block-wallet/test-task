import { Transaction } from "../services/TransactionsService";
import { IAppState } from "./background/InitialState";

enum Actions {
  SET_TRANSACTIONS = "SET_TRANSACTIONS",
  SET_STATE = "SET_STATE",
}

export interface SetTransactionAction {
  type: Actions.SET_TRANSACTIONS;
  payload: Omit<Transaction, "id">[];
}

export interface SetStateAction {
  type: Actions.SET_STATE;
  payload: Partial<IAppState>;
}

export default Actions;
