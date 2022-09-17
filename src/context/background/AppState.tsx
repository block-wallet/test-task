import { useEffect, useReducer } from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';
import Actions from '../contextActions';
import { Transaction, TransactionsService } from '../../services/TransactionsService';

import { IAppState, initAppState } from './InitialState';
import defaults from '../../utils/constants';

const transactionsService = new TransactionsService({transactions:[]});


const AppState = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initAppState);

  const addDefaultTransactions = async() => {
    await Promise.all(Object.values(defaults.pastTransactions).map(async (transaction) => {
      transactionsService.addTransaction({
        to: transaction.recipient,
        from: defaults.publicAddress,
        value: Number(transaction.amount),
        date: new Date(transaction.date),
        })
    }));
  };

  const init = async () => {
    await addDefaultTransactions();
    const currentTransactions = await transactionsService.getListOfTransactions()    
    dispatch({
      type: Actions.SET_TRANSACTIONS,
      payload: currentTransactions
    });
  };

  useEffect(() => {
    init();    
  },[]);

  // Set app state
  const setState = (newState: IAppState) => {
    dispatch({
      type: Actions.SET_STATE,
      payload: newState,
    });
  };
  
  // TODO: Complete the addTransaction method
  const addTransaction = async (transaction: Omit<Transaction,"id">) => {
    await transactionsService.addTransaction(transaction);
    const currentTransactions = await transactionsService.getListOfTransactions()  
    dispatch({
      type: Actions.SET_TRANSACTIONS,
      payload: currentTransactions
    });
  }

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        addTransaction,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
