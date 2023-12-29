<template>
    <li>
        <h2>Username:{{name}}</h2>
        <h3>Age:{{age}}</h3>
    </li>
</template>

<script>
export default {
    props: ['name', 'age'],
}
</script>