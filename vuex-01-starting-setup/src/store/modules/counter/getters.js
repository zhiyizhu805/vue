export default {
  finalCounter(state) {
    return state.counter * 2;
  },
  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
  //(8.4.1)
  // testAuth(state, getters, rootState, rootGetters) {
  testAuth(state, rootGetters) {
    console.log('test_local_getters:', state.logInStatus); //undefined
    console.log('test:', rootGetters.logInStatus); //true
    return state.logInStatus;
  },
};
