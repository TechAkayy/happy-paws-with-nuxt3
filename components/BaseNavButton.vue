<script setup>
// import { useAttrs } from "vue";

defineProps({
  to: {
    type: String,
    required: true
  }
})

</script>
<template>
    <NuxtLink class="bg-primary-500 hover:bg-primary-600 inline-block px-6 py-2 rounded-full text-gray-900" :to="to">
        <slot>Button2</slot>
        <span class="ml-3"> <slot name="append"></slot> </span>
    </NuxtLink>
    <NuxtLink class="bg-primary-500 hover:bg-primary-600 inline-block px-6 py-2 rounded-full text-gray-900" :to="to">
        <slot>Button2</slot>
        <span class="ml-3"> <slot name="append"></slot> </span>
    </NuxtLink>
</template>
<style scoped>
.name {
  color: green;
  font-weight: bold;
}
</style>
