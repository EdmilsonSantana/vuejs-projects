import * as types from './mutation-types';

export const newTicker = ({ commit }, payload) => {
  commit(types.NEW_TICKER, payload);
};

export const resetTickers = ({ commit }, payload) => {
  commit(types.RESET_TICKERS, payload);
};
