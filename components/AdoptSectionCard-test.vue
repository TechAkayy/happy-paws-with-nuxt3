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
<template :onVnodeMounted="pgUpdateElCache('mounted', 26)" :onVnodeUpdated="pgUpdateElCache('updated', 26)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 26)">
    <div class="p-3 w-full md:w-6/12 lg:w-4/12 xl:w-3/12" :onVnodeMounted="pgUpdateElCache('mounted', 27)" :onVnodeUpdated="pgUpdateElCache('updated', 27)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 27)">
        <div class="bg-white px-6 py-12 rounded-3xl text-center text-gray-400" :onVnodeMounted="pgUpdateElCache('mounted', 28)" :onVnodeUpdated="pgUpdateElCache('updated', 28)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 28)">
            <img :src="imageUrl" class="mb-4 mx-auto rounded-xl w-full sm:w-9/12" alt="..." width="600" height="600" :onVnodeMounted="pgUpdateElCache('mounted', 29)" :onVnodeUpdated="pgUpdateElCache('updated', 29)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 29)"/>
            <h4 class="font-bold mb-2 text-2xl text-gray-900" :onVnodeMounted="pgUpdateElCache('mounted', 30)" :onVnodeUpdated="pgUpdateElCache('updated', 30)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 30)">{{ name }} </h4>
            <p class="mb-6 text-sm" :onVnodeMounted="pgUpdateElCache('mounted', 31)" :onVnodeUpdated="pgUpdateElCache('updated', 31)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 31)">
        {{ breed }} </p>
            <BaseNavButton :to="`/adopt/${id}`" :onVnodeMounted="pgUpdateElCache('mounted', 32)" :onVnodeUpdated="pgUpdateElCache('updated', 32)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 32)">
                <span :onVnodeMounted="pgUpdateElCache('mounted', 33)" :onVnodeUpdated="pgUpdateElCache('updated', 33)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 33)">Adopt Now</span>
                <template v-slot:append :onVnodeMounted="pgUpdateElCache('mounted', 34)" :onVnodeUpdated="pgUpdateElCache('updated', 34)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 34)">
                    <Icon name="ri:heart-add-fill" size="24" class="text-yellow-700" :onVnodeMounted="pgUpdateElCache('mounted', 35)" :onVnodeUpdated="pgUpdateElCache('updated', 35)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 35)"></Icon>
                </template>
            </BaseNavButton>
        </div>
    </div>
</template>
<style scoped>
.adopt-section-card,
.pg-node-id-1,
.pg-main-cs-12,
.pg-file-cs-12 {
  color: green;
  font-weight: bold;
}
</style>
