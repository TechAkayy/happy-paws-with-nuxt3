<script setup>

import { usePinegrow } from '@pinegrow/vite-plugin/vue'

const props = defineProps({
  pet: {
    type: Object,
    required: true
  }
})

const { id: id, Name: name, Species: species, Breed: breed, Sex: sex, Date_Of_Birth: dateOfBirth, Image_URL: imageUrl } = toRefs(props.pet)



const { pgUpdateElCache } = usePinegrow()
</script>
<template :onVnodeMounted="pgUpdateElCache('mounted', 39)" :onVnodeUpdated="pgUpdateElCache('updated', 39)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 39)">
  <div class="p-3 w-full md:w-6/12 lg:w-4/12 xl:w-3/12" :onVnodeMounted="pgUpdateElCache('mounted', 40)"
    :onVnodeUpdated="pgUpdateElCache('updated', 40)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 40)">
    <div class="bg-white px-6 py-12 rounded-3xl text-center text-gray-400"
      :onVnodeMounted="pgUpdateElCache('mounted', 41)" :onVnodeUpdated="pgUpdateElCache('updated', 41)"
      :onVnodeUnmounted="pgUpdateElCache('unmounted', 41)">
      <img :src="imageUrl" class="mb-4 mx-auto rounded-xl w-full sm:w-9/12" alt="..." width="600" height="600"
        :onVnodeMounted="pgUpdateElCache('mounted', 42)" :onVnodeUpdated="pgUpdateElCache('updated', 42)"
        :onVnodeUnmounted="pgUpdateElCache('unmounted', 42)" />
      <h4 class="font-bold mb-2 text-2xl text-gray-900" :onVnodeMounted="pgUpdateElCache('mounted', 43)"
        :onVnodeUpdated="pgUpdateElCache('updated', 43)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 43)">{{ name }}
      </h4>
      <p class="mb-6 text-sm" :onVnodeMounted="pgUpdateElCache('mounted', 44)"
        :onVnodeUpdated="pgUpdateElCache('updated', 44)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 44)">
        {{ breed }} </p>
      <BaseNavButton :to="`/adopt/${id}`" :onVnodeMounted="pgUpdateElCache('mounted', 45)"
        :onVnodeUpdated="pgUpdateElCache('updated', 45)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 45)">
        <span class="text-purple-400" :onVnodeMounted="pgUpdateElCache('mounted', 46)"
          :onVnodeUpdated="pgUpdateElCache('updated', 46)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 46)">Adopt
          Now</span>
        <template v-slot:append :onVnodeMounted="pgUpdateElCache('mounted', 47)"
          :onVnodeUpdated="pgUpdateElCache('updated', 47)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 47)">
          <Icon name="ri:heart-add-fill" size="24" class="text-yellow-700"
            :onVnodeMounted="pgUpdateElCache('mounted', 48)" :onVnodeUpdated="pgUpdateElCache('updated', 48)"
            :onVnodeUnmounted="pgUpdateElCache('unmounted', 48)"></Icon>
        </template>
      </BaseNavButton>
    </div>
  </div>
</template>
<style scoped>
.adopt-section-card,
.pg-node-id-1,
.pg-main-cs-25,
.pg-file-cs-25 {
  color: green;
  font-weight: bold;
}
</style>
