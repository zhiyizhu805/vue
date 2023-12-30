import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';
// import BadgeList from './components/BadgeList.vue';
// import TheHeader from './components/TheHeader.vue';
// import UserInfo from './components/UserInfo.vue';

const app = createApp(App);


//Rgistering all component globally means vue needs to load them all when the application starts and the list of components will be huge.
// for the component that will be used in multiple places, it is better to register them globally
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
// app.component('badge-list', BadgeList);
// app.component('the-header', TheHeader);
// app.component('user-info', UserInfo);

app.mount('#app');
