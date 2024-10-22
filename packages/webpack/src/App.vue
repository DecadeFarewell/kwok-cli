<template>
  <div class="title">hello vue1243</div>

  <BaseSvg />

  <Todo />

  <h3>{{ acount }}</h3>

  <button @click="onAdd">add +</button>
</template>

<script setup>
import { ref } from "vue";
import BaseSvg from "@/assets/base.svg";
import Todo from "@/components/Todo.vue";
import { add } from "@/utils/math";

const count = ref(1);

// todo: 为什么报错不会抛出？？
const onAdd = () => {
  count.value++;
  const res = add(1, 3);
  console.log("res: ", res);
};
</script>

<style scoped lang="scss">
.title {
  color: red;
}
</style>
