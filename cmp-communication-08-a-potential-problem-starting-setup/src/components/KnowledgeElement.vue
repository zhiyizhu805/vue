<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <!-- make sure id is passed to selectTopic to ensure the function is called with the correct id -->
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['selectTopic'],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>