<template>
  <div>
    <header>
      <!--  name the slot ,in the child component, you can use the name to specify where to put the slot content using v-slot:name-of-your-slot -->
      <!--  you can set the default content for the slot, if the parent component doesn't provide the content for the slot, the default content will be used -->
      <slot name="header"><h2>The default</h2></slot>
    </header>
    <!-- slot without name is the default slot -->     
       <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
