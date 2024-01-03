import { createApp } from 'vue';
// (1) use vuex to manage the state of our app globally.Use createStore to create a state and then use it in our app globally.
import store from './store/index.js';


import App from './App.vue';
const app = createApp(App);

//(1.3) use store in our app
app.use(store);

app.mount('#app');
