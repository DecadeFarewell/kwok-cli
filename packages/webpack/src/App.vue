<template>
  <div class="app">
    <div class="title">hello vue1243</div>

    <h3>{{ count }}</h3>

    <button @click="onAdd">add</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(1);

// todo: 为什么报错不会抛出？？
const add = () => count.value++
</script>
