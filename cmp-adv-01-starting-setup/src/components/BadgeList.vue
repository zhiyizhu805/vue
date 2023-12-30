<template>
  <section>
    <!-- remember using kebab-case for the tag name(then you can have open and close tag) when you need to use slots -->
    <base-card>
        <!-- wrap content in a template tag , then you can use v-slot:header to specify where to put the slot content -->
      <!-- <template v-slot:header> -->
        <!--  #header is the shorthand for v-slot:header -->
      <template #header>
        <h2>Available Badges</h2>
      </template>
      <template v-slot:default>
      <ul>
        <li>
          <base-badge type="admin" caption="ADMIN"></base-badge>
        </li>
        <li>
          <base-badge type="author" caption="AUTHOR"></base-badge>
        </li>
      </ul>
      </template>
    </base-card>
  </section>
</template>

<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
