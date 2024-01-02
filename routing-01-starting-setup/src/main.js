import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


const app = createApp(App);

// (1.3): registering the router,make the app aware of the router
app.use(router);

app.mount('#app');
