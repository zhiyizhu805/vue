<template>
  <!--1) child slot component contains the data ,with using scoped slot, the parent component can use the data from the child component -->
  <ul>
    <li v-for="goal in goals" :key="goal">
      <!-- {{goal}} -->
      <!--2) on the slot, you can add a prop,you can also bind the prop to a dynamic value propname="data-inside-child-compnent"  OR :propname="daynamic-data-inside-child-compnent", then you can access the props in the parent component -->
      <slot :item="goal" dummy="heyyy"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn Vue!"],
    };
  },
};
</script>
