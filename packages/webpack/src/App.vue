<template>
  <div class="title">hello vue1243</div>

  <h3>{{ acount }}</h3>

  <button @click="onAdd">add +</button>
</template>

<script setup>
import { ref } from "vue";

const count = ref(1);

// todo: 为什么报错不会抛出？？
const add = () => count.value++;
</script>

<style scoped lang="scss">
.title {
  color: red;
}
</style>
