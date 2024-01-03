<template>
    <p>{{logInStatus? 'You are logged in!': 'Please log in'}}</p>
    <button @click="logIn" v-if="!logInStatus">Log in</button>
    <button @click="logOut" v-else>Log out</button>
    <!-- (8.4.3) -->
    <!-- <p>{{isTestAuth}}</p> -->
</template>

<script>
//(7.5) add mapActions and mapGetters and use them to map the actions and getters to the local methods and computed properties
import {mapActions,mapGetters} from 'vuex';
export default {
    //rember to include the actions in the methods object
    methods:{
        ...mapActions(['logIn','logOut']),
    },
    // (8.4.4) test for the local module getter
    computed: {
        ...mapGetters(['logInStatus']),
        isTestAuth(){
            console.log(this.$store.getters)
            console.log(this.$store.getters.testAuth)
            return this.$store.getters.testAuth;
        }
    },
}
</script>