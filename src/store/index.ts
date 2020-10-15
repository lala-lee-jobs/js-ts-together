import { createStore } from 'vuex';

export default createStore({
  state: {
    bookCount: 0,
  },
  mutations: {
    increment(state, n) {
      state.bookCount += n;
    },
    minus(state, n) {
      if (state.bookCount > 0) {
        state.bookCount -= n;
      }
    },
  },
  actions: {},
  modules: {},
});
