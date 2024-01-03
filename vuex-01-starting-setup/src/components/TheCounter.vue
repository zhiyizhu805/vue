<template>
<!-- (1.4) access the global state through the store object -->
  <!-- <h3>{{ counter }}</h3> -->
  <!-- (5.3) directly access the getter -->
  <h3>{{ finalCounter }}</h3>
</template>

<script>
// (5.1) import mapGetters from vuex
import { mapGetters } from 'vuex'
export default {
  computed: {
    // counter() {
    //   // return this.$store.state.counter * 2;
    //   // (3.4)instead of accessing the state directly, we can use getters
    //   return this.$store.getters.normailzedCounter;
    // },
  
      // (5.2)instead of (3.4), we can use mapGetters
      // ...mapGetters(['finalCounter'])
      
      //(9.2.1) if the namespaced module is used, we need to specify the module name
      ...mapGetters('numbers',['finalCounter'])
  },  
};
</script>
