<script setup>
import { ref } from 'vue'
import { logEvent } from 'histoire/client'
import BaseNavButton from './BaseNavButton.vue'

const text = ref('Click me')
</script>

<template>
  <Story>
    <BaseNavButton @click="logEvent('click', $event)">
      {{ text }}
    </BaseNavButton>

    <template #controls>
      <HstText title="default slot" v-model="text" />
    </template>
  </Story>
</template>
