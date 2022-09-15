import { createContext } from 'react';
import { Transaction } from '../../services/TransactionsService';
import { IAppState, initAppState } from './InitialState';

type ContextType = {
  state: IAppState,
  addTransaction: (transaction: Omit<Transaction,"id">) => void
  setState: (state: IAppState) => void
}

const AppContext: React.Context<ContextType> = createContext<ContextType>({
  state: initAppState,
  addTransaction: () => {},
  setState: () => {}
});

export default AppContext;
