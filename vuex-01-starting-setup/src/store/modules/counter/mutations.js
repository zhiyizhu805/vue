export default {
  increaseOne(state) {
    console.log(state);
    state.counter++;
  },
  increaseTen(state, payload) {
    console.log('payload', payload);
    state.counter = state.counter + payload.value;
  },
};
