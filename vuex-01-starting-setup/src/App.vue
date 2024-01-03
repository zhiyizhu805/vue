<template>
  <base-container title="Vuex" v-if="logInStatus">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 1</button>
    <change-counter></change-counter>
  </base-container>

  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    ...mapGetters(['logInStatus']),
  },
  methods: {
    addOne() {
      // (1.5) add a method to increment directly on the global state.This apporach is not recommended.Please use mutations instead.
      // this.$store.state.counter++;

      // (2.2) call the increment mutation
      // this.$store.commit('increaseOne');
      // (4.6.2) Instead of in(2.2), we use dispatch to call an action.

      // (9.2.4) if the namespaced module is used, we need to specify the module name
      this.$store.dispatch('numbers/increaseOne');
    },
  },
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
