<template>
    <h3>{{counter}}</h3>
    <p>We do more...</p>
</template>


<script>
export default {
    computed: {
        counter() {
            // return this.$store.state.counter * 2;
            // return this.$store.getters.normalizedCounter;

            //(9.2.2) if the namespaced module is used, we need to specify the module name
            return this.$store.getters['numbers/normalizedCounter'];
        },
    },
};
</script>