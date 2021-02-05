import Actions from '../contextActions';
import { IBackgroundState } from './backgroundContext';

type BackgroundAction = {
  type: Actions;
  payload?: any;
};

const backgroundReducer = (
  state: IBackgroundState,
  action: BackgroundAction
) => {
  switch (action.type) {
    case Actions.SET_STATE:
      return {
        ...state,
        state: action.payload,
      };
    default:
      return state;
  }
};

export default backgroundReducer;
