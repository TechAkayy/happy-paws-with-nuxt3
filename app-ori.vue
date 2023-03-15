<template :onVnodeMounted="pgUpdateElCache('mounted', 52)" :onVnodeUpdated="pgUpdateElCache('updated', 52)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 52)">
  <NuxtLayout :onVnodeMounted="pgUpdateElCache('mounted', 53)" :onVnodeUpdated="pgUpdateElCache('updated', 53)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 53)">
    <NuxtPage class="mybkg" :onVnodeMounted="pgUpdateElCache('mounted', 54)" :onVnodeUpdated="pgUpdateElCache('updated', 54)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 54)"></NuxtPage>
  </NuxtLayout>
</template>
<style class="scoped">
.mybkg,
.pg-node-id-1,
.pg-main-cs-70,
.pg-file-cs-70 {
  background-color: #cadc58;
}
</style>

<script setup>


import { usePinegrow } from '@pinegrow/vite-plugin/vue'


const { pgUpdateElCache } = usePinegrow()

</script>
