import React, { useReducer } from 'react';
import BackgroundContext, {
  initBackgroundState,
  IBackgroundState,
} from './backgroundContext';
import BackgroundReducer from './backgroundReducer';
import Actions from '../contextActions';

const BackgroundState = (props: any) => {
  const [state, dispatch] = useReducer(BackgroundReducer, initBackgroundState);

  // Set fetching as active
  const setState = (newState: IBackgroundState) => {
    dispatch({
      type: Actions.SET_STATE,
      payload: newState,
    });
  };

  return (
    <BackgroundContext.Provider
      value={{
        state: state.state,
      }}
    >
      {props.children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundState;
