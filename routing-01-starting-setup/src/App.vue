<template>
  <!-- <the-navigation @set-page="setActivePage"></the-navigation> -->
  <the-navigation></the-navigation>
  <main>
    <!-- <component :is="activePage"></component> -->
    <!--  (1.4) use router-view tag to let vue router to render the component -->
    <router-view></router-view>
  </main>
  <!-- add another router-view tag for footer and name it.Just as slots, unnamed router-view will be rendered by default -->
  <footer>
    <router-view name="footer"></router-view>
  </footer>
</template>

<script>
//(1.5) remove the import of TeamsList and UsersList and register the components in the router configuration
// import TeamsList from './components/teams/TeamsList.vue';
// import UsersList from './components/users/UsersList.vue';
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
    // TeamsList,
    // UsersList,
  },
  data() {
    return {
      // activePage: 'teams-list',
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
        { id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
        { id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
        { id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  // methods: {
  //   setActivePage(page) {
  //     this.activePage = page;
  //   },
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>