export default {
    //(3) getters
    //(3.1) getters are used to get the state from the store and then use it in our app.
    //(3.2) getters can take a second argument which is other getters in the store.
    // finalCounter(state){
    //     return state.counter * 2;
    // },
    // //(3.3) getters can use other getters in the store.
    // normalizedCounter(_,getters){
    //     const finalCounter = getters.finalCounter;
    //     if(finalCounter < 0){
    //         return 0;
    //     }
    //     if(finalCounter > 100){
    //         return 100;
    //     }
    //     return finalCounter;
    // },
    //(7.4) add a new getter to get the login status
    logInStatus(state) {
      return state.isLoggedIn;
    },
  }