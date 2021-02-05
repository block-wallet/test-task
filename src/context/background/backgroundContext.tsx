import { createContext } from 'react';

export interface IBackgroundState {
  state: object;
}

export const initBackgroundState: IBackgroundState = {
  state: {},
};

const BackgroundContext: React.Context<IBackgroundState> = createContext<IBackgroundState>(
  initBackgroundState
);

export default BackgroundContext;
