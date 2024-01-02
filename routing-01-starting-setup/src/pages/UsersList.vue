<template>
 <!--(2.1) Programmatic navigation example:  do something ,then navigate to the right page -->
  <button @click="comfirmInput">Confirm</button>
  <!-- (16.2) having save changes button to allow the user to save the changes before leaving the page -->
  <button @click="saveChanges">Save Changes</button>
  <p>{{isChangeSaved}}</p>
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
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data(){
    return {
      isChangeSaved: false,
    }
  },
  inject: ['users'],
  methods: {
    //(2.2) add a method to navigate to the right page
    comfirmInput() {
      //do something
      //since we add the router package, we can use this.$router.push() to navigate to the right page
     this.$router.push('/teams');
    },
    //(16.3)
    saveChanges() {
      this.isChangeSaved = !this.isChangeSaved;
    },
  },
  // (15.2) you can also add the beforeRouteEnter hook to the component.
  //       sidenotes: inside of component, you can add all vue lifecycle hooks like beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed..
  // beforeRouteEnter(to, from, next) {
  //   console.log('users list beforeRouteEnter');
  //   console.log(to, from);
  //   next();
  // },

  //(16) add beforeRouteLeave hook to the component to prevent the user from leaving the page
  beforeRouteLeave(to, from, next) {
    console.log('users list beforeRouteLeave');
    console.log(to, from);
    // (16.1) you can add a condition to check if the user wants to leave the page
    if (this.isChangeSaved) {
      next();
    } else {
      // (16.4)directly prevent the user from leaving the page
      // next(false);
      // (16.5) add a promt to ask the user if they want to leave the page .If they say yes, then they can leave the page.next(),inside of next(), you can pass in true or false to allow the user to leave the page or not
      const userWantToLeave = prompt('Do you want to leave?You got unsaved changes');
      next(userWantToLeave === 'yes');
    }
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
