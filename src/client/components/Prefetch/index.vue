<template>
  <div>
    <h3>prefetch:</h3>

    <ElButton>prefetch</ElButton>
  </div>
</template>

<script setup>
import { ElButton } from "element-plus";

import(/* webpackPrefetch: true */ "./source/prefetch-source");
import(/* webpackPreload: true */ "./source/preload-source");
</script>
