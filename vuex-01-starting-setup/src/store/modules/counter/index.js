import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

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
//(9) add namespaced to the module to avoid name collision
const counterModule = {
    //(9.1)
    namespaced: true,
    state() {
      return {
        counter: 0,
      };
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters,
  };
 
export default counterModule;