<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <!-- <a href="#">View Members</a> -->
    <!--  (4) dynamic path, use v-bind to bind dynamic user input for the selected team -->
    <!-- (4.3) bind the id to the router-link -->
    <router-link :to="teamMembersLink">View Members</router-link>

  
  </li>
</template>

<script>
export default {
  // (4.2) receive the id from the parent component
  props: ['id','name', 'memberCount'],
  // (4.4) outsourced the dynamic path to a computed property
  computed:{
    teamMembersLink(){
      return `/teams/${this.id}`
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>