import { createApp } from 'vue';
// (1) how to use router build multiple pages
//  1: import the createRouter and createWebHistory from Vue Router
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
// 2: config the createRouter
// the createRouter takes two arguments, the first is the history and the second is the routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component:TeamsList }, //our domain.com/teams => TeamsList
    { path: '/users', component:UsersList },
    //(3) adding a dynamic route
    { path:'/teams/:teamId', component:TeamMembers},

    // if you have a dynamic route, you can use the colon,but make sure the order is correct,otherwise the new will be treated as a dynamic route
    // { path:'/users/new'},
    // { path:'/teams/:teamId'},
  ],
//8.2: change the default active class .Its not mandatory
//   linkActiveClass : 'router-link-active',//this is the default value,you can change it
//   linkActiveClass : 'active',
});

const app = createApp(App);


// 3: registering the router,make the app aware of the router
app.use(router);

app.mount('#app');
