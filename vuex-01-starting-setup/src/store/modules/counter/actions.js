export default {
  increaseOne(context) {
    // (8.4.2)
    context.getters.testAuth;
    //   console.log('context', context);
    setTimeout(function () {
      context.commit('increaseOne');
    }, 2000);
  },
  increaseTen(context, payload) {
    setTimeout(function () {
      context.commit('increaseTen', payload);
    }, 2000);
  },
};
