<template>
  <div class="title">hello vue1243</div>

  <BaseSvg />

  <Todo />

  <Prefetch />

  <h3>{{ count }}</h3>


  <ElButton @click="onAdd">add</ElButton>
</template>

<script setup>
import { ref } from "vue";
import BaseSvg from "@/assets/image/base.svg";
import Todo from "@/components/Todo.vue";
import Prefetch from "@/components/Prefetch/index.vue";
import { add } from "@/utils/math";
import { ElButton } from "element-plus"

const count = ref(1);

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
