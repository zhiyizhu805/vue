<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  //inject works like props which passes an array of data to the component.You can only inject data from a parent component(higher layer) NOT neighbor component
  inject: ['topics'],
};
</script>