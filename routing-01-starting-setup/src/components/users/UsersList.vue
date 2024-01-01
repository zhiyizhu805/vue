<template>
 <!--(2) Programmatic navigation example:  do something ,then navigate to the right page -->
  <button @click="comfirmInput">Confirm</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    comfirmInput() {
      //do something
      //since we add the router package, we can use this.$router.push() to navigate to the right page
     this.$router.push('/teams');
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
