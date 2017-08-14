import Vue from 'vue';
import * as types from './mutation-types';

export default {
  [types.NEW_TICKER](state, ticker) {
    state.tickers.push(ticker);
  },
  [types.RESET_TICKERS](state, ticker) {
    state.tickers = [];
  },
};
