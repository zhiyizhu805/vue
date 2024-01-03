import { createApp } from 'vue';
// (1) use vuex to manage the state of our app globally.Use createStore to create a state and then use it in our app globally.
// (1.1) import createStore from vuex
import { createStore } from 'vuex';

import App from './App.vue';
//(2) mutations - synchronous
//(2.1)instead of changing the global state directly on this.$store.state.counter++ everywhere in our app, we can use mutations to change the state.In this way, you define how you want to change the state in one place and then you can call this mutation everywhere in your app.
//(2.3)mutations with payload argument:
//     mutations can take a payload as the second argument.The second argument can be an object or an array or a number or a string
//(4) actions - asynchronous
//(4.1)actions are used to run asynchronous code and then commit mutations to change the state.
//(4.2)actions can take a context as the first argument which is an object that has access to the state, getters, mutations, actions.
//(4.3)actions can take a payload as the second argument.
//(4.4)actions can/should have same name as mutations.

//(8) organizing the store with module and merging the modules to the store
//(8.1) organizing the store with module
//(8.4) ❓(It does work)local module has no access to the global state in its own state, getters, mutations, actions. However, the rootState and rootGetters are passed to the local module as the third and fourth arguments.
const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increaseOne(state) {
      console.log(state);
      state.counter++;
    },
    increaseTen(state, payload) {
      console.log('payload', payload);
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
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
  },
  getters: {
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
        console.log('test_local_getters:',state.logInStatus); //undefined
        console.log('test:',rootGetters.logInStatus);//true
        return state.logInStatus;
    },
  },
};

//(1.2)createStore take an object as an argument where we can define our state, mutations, actions, getters
const store = createStore({
  //(8.2)merging modules to the store
  modules: {
    //(8.3)the key is the name of the module and the value is the module itself
    numbers: counterModule,
  },
  state() {
    return {
      // (7) practice: login reactivity
      // (7.1) add a new property to the state
      isLoggedIn: false,
    };
  },

  mutations: {
    //(7.2) add a new mutation to change the login status
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  getters: {
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
  },
  actions: {
    //(7.3) add login and logout actions
    logIn(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logOut(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
});

const app = createApp(App);

//(1.3) use store in our app
app.use(store);

app.mount('#app');
