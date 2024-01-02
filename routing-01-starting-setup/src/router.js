// (1) how to use router build multiple pages
//  (1.1): import the createRouter and createWebHistory from Vue Router
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

// (1.2): config the createRouter
// the createRouter takes two arguments, the first is the history and the second is the routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // (7.1) use redirect to redirect the user to the teams page
    { path: '/', redirect: '/teams' },
    // { path: '/', component:TeamsList },
    // (7.2) alias is used to set an alternative path to the same component. adding alias:'/' directly to the route that need a alternative path
    // { path: '/teams', component:TeamsList ,alias:'/'},

    //(9.1) nested the team members component inside the teams list component:The <router-view> in the App.vue is our top level router view component and its only responsible for rendering the root routes,so the child routes cannot be rendered there.Instead you need to have a <router-view> in the component(TeamsList)  where you want the child component to be rendered.
    //   {path: '/teams',
    //   component: TeamsList,
    //   children: [{ path: ':teamId', component: TeamMembers, props: true }],
    // },

    //(10.1) named routes(navigating by name instead of path): add a name property to the route
    //(12) use multiple <route-view></route-view> for the same route. Need to name them
    // (12.1) created two footer components
    // (12.2) add the components property to the route,key is the name of the router view and the value is the component
    {
      path: '/teams',
      // component: TeamsList,
      //(18) meta property is accessible where the $route object is accessible
      // (18.1) scenario1: inside of components,you could pass data to the component which is loaded for that route
      // (18.2.1) scenario2: use it in the navigation guard where you get access to the to and from route objects.
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },

    // { path: '/users', component: UsersList },
    // (15) beforeEnter property is a function that will be executed before entering the route.Add it to the route that you want to add a guard to
    // (15.1) add it directly to the route in the config
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      // beforeEnter(to, from, next) {
      //   console.log('users beforeEnter');
      //   console.log(to, from);
      //   next();
      // },
    },
    //(3.1) adding a dynamic route (can access from the url)
    // { path:'/teams/:teamId', component:TeamMembers},

    //(6.1) set props to true,so the dynamic teamId will be passed as a prop to the component
    // { path:'/teams/:teamId', component:TeamMembers,props:true},
    //(8) any route that is not defined above will be redirected to the teams page
    { path: '/:notFound(.*)', component: NotFound },

    // if you have a dynamic route, you can use the colon,but make sure the order is correct,otherwise the new will be treated as a dynamic route
    // { path:'/users/new'},
    // { path:'/teams/:teamId'},
  ],
  //(1.8): change the default active class .Its not mandatory
  //   linkActiveClass : 'router-link-active',//this is the default value,you can change it
  //   linkActiveClass : 'active',

  //(13)scrolling behavior property which is a function that takes three arguments(to,from,savedPosition)
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior(_, _2, savedPosition) {
    //savedPosition is only available when you click the back button
    // console.log(savedPosition);
    //when you click the back button, you will be scrolled to the position where you were before
    if (savedPosition) {
      return savedPosition;
    }
    //when you click a link, you will be scrolled to the top
    return { left: 0, top: 0 };
  },
});

// **GUARDS is function that will automatically be called by view router when a navigation happens
//    this can be useful together with authentication to prevent users from accessing pages they are not allowed to access
//    order: global > route config > component
// (14.1)beforeEach will be called before every navigation
router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  //(14.2) to allow the navigation to continue
  next();
  // next(false);//to cancel the navigation
  // next('/users');//to redirect to a different page
  // next({name:'team-members',params:{teamId:'t2'}});//to redirect to a different page

  // (14.3) demo:add a condition to the beforeEach function to add a guard to a specific route
  //   if(to.name === 'team-members'){
  //     next()
  //  }else{
  //    next({name:'team-members',params:{teamId:'t2'}})
  //  }

  // //(18.2.2) You can then add data to indicate that this route needs authentication
  // if (to.meta.needsAuth) {
  //   console.log('Needs auth!'); //this will be executed before the navigation
  //   next();
  // }else{
  //   next();
  // }
});

//(17) global afterEach guard
router.afterEach(function (to, from) {
  //sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;