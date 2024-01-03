// (1.1) import createStore from vuex
import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './modules/counter/index.js';


  //(1.2)createStore take an object as an argument where we can define our state, mutations, actions, getters
  const store = createStore({
    //(8.2)merging modules to the store
    modules: {
      //(8.3)the key is the namespace of the module and the value is the module itself
      numbers: counterModule,
    },
    state() {
      return {
        // (7) practice: login reactivity
        // (7.1) add a new property to the state
        isLoggedIn: false,
      };
    },
  
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions,
  });
  

  export default store;