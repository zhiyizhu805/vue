<template>
  <div>
    <header>
      <!--  name the slot ,in the child component, you can use the name to specify where to put the slot content using v-slot:name-of-your-slot -->
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
