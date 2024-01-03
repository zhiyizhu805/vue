<template>
<!-- (1.4) access the global state through the store object -->
    <!-- <button @click="addTen">Add 10</button> -->
    <button @click="increase1">Add 2</button>
    <button @click="increase20({value:10})">Add 20</button>
</template>

<script>
// (6.1) import mapActions from vuex
import {mapActions} from 'vuex';
export default {
    methods: {
    // (6.2.1) use mapActions to map the actions to the local methods. Its alternative is in(4.6).This saves code
    // ...mapActions(['increaseOne','increaseTen']),
    // (6.2.2) you can also rename the actions
    // ...mapActions({
    //     increase1: 'increaseOne',
    //     increase20: 'increaseTen',
    // })
    
    // (9.2.3) if the namespaced module is used, we need to specify the module name
    ...mapActions('numbers',{
    increase1: 'increaseOne',
    increase20: 'increaseTen',
    })


    // addTen() {
    // // Never mutate the state directly. Instead, use mutations.
    // //   this.$store.state.counter++;

    // // (2.4.1) call the increment mutation with a payload.commit can take a second argument, which is the payload. The payload will then be passed to the mutation handler as the second argument.
    // // this.$store.commit('increaseTen',{value:10});

    // // (2.4.2) you can also call commit with an object that has a type property and a payload property. This is called an action object.You can add as many properties as you want to this object. This object will be passed to the mutation handler as the first argument.
    // // this.$store.commit({
    // //     type: 'increaseTen',
    // //     value: 10,
    // // });

    // //(4.6) Instead of in(2.4.2), we use dispatch to call an action.
    // // this.$store.dispatch('increaseTen',{value:10});
    //     this.$store.dispatch({
    //     type: 'increaseTen',
    //     value: 10,
    // });
    // },
    }
};
</script>
