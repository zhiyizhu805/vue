<template>
  <ul>
    <!-- (4.1) pass the id to the team-item component -->
    <teams-item
      v-for="team in teams"
      :key="team.id"
      :name="team.name"
      :member-count="team.members.length"
      :id="team.id"
    ></teams-item>
  </ul>
  <!-- (9.2) add router-link for child routes -->
  <router-view></router-view>
</template>

<script>
import TeamsItem from '../components/teams/TeamsItem.vue';

export default {
  components: {
    TeamsItem,
  },
  inject: ['teams'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>