<template>
  <header>
    <nav>
      <ul>
        <li>
          <!-- <button @click="setActivePage('teams-list')">Teams</button> -->
          <!--  (1.6) use router-link tag to let vue direct the user to the right page -->
          <router-link to="/teams">Teams</router-link>
        </li>
        <li>
          <router-link to="/users">Users</router-link>
          <!-- <button @click="setActivePage('users-list')">Users</button> -->
        </li>
      </ul>
    </nav>
  </header>
</template>

<!-- <script>
export default {
  emits: ['set-page'],
  methods: {
    setActivePage(page) {
      this.$emit('set-page', page);
    },
  },
};
</script>
-->
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

  /* (1.7): styling active links so users know which page they are on */
a:hover,
a:active,
  /*  a.router-link-active  tells css that I want to apply the styles to every anchor tag that has router-link-active class on it. */
a.router-link-active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}

</style>
