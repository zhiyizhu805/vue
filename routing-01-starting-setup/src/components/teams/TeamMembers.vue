<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <!-- (5) a scenario where we want to navigate to a team2 from the every team page. the vue does not destroy the component when we navigate to another page and come back to the same page. so the created() lifecycle hook will not be called again. so we need to use watch() lifecycle hook to watch the route change and manually call the created() lifecycle hook again. -->
    <!--(5.1) set router-link to="/teams/t2" -->
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  //(3.2)
  inject: ['users', 'teams'],

  //(6.2) use props to get access to the dynamic route parameter
  props: ['teamId'],
  components: {
    UserItem,
  },
  data() {
    return {
      // teamName: 'Test',
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],
      teamName: '',
      members: [],
    };
  },
  //(3.3)we need a way getting access to the dynamic route parameter.We use created() lifecycle hook , this will be called when the component is created before its shown on the page but once all the data is available.]
  // created() {
  //   // we can access $route.params to get the dynamic route parameter sicne we include the library in the router configuration
  //   const teamId = this.$route.params.teamId;
  //   const selectedTeam = this.teams.find((team) => team.id === teamId);
  //   const members = selectedTeam.members;
  //   const selectedMembers = [];
  //   for (const member of members) {
  //     const selectedUser = this.users.find((user) => user.id === member);
  //     selectedMembers.push(selectedUser);
  //   }
  //   this.members = selectedMembers;
  //   this.teamName = selectedTeam.name;
  // },

  // (5.3)inside created() lifecycle hook, we can call the 5.2 method to load the team members
  created() {
    // this.loadTeamMembers(this.$route);
    // (6.3) replace this.$route with this.teamId
    this.loadTeamMembers(this.teamId);

    // (11.2) extract the query parameter(test) by accessing this.$route.query
    console.log(this.$route.query) //access the query object
    console.log(this.$route.query.sort) //access the query parameter
    //side note: query parameters are not props, so you cannot access them by this.sort.It will not work


  },
  // (16) beforeRouteUpdate() lifecycle hook will be called whenever the component is about to be reused with new data. this will be called when the route changes but the component is not destroyed. this will not be called when the component is created for the first time.so this can be an alternative to watch() lifecycle hook.
  beforeRouteUpdate(to, from, next) {
    console.log('team members beforeRouteUpdate');
    // console.log(to, from);
    // alternative to watch() lifecycle hook:
    // this.loadTeamMembers(to.params.teamId);
    next();
  },
  methods: {
    // (5.2)export logic for loading team members to a separate method
    // loadTeamMembers(route) {
      // const teamId = route.params.teamId;
      // const selectedTeam = this.teams.find((team) => team.id === teamId);
      
      //(6.3) replace route.params.teamId; with this.teamId
     loadTeamMembers() {
      const selectedTeam = this.teams.find((team) => team.id === this.teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  // (5.4) use watch() lifecycle hook to watch the route change and manually call the loadTeamMembers() method
  // this will make sure that the component is updated when the route changes
  watch: {
    $route(newRoute) {
      this.loadTeamMembers(newRoute);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
