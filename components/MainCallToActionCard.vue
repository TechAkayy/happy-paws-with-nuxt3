<script setup>
const props = defineProps({
  img: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
})

const imgStyle = computed(() => ({
  'background-image': `url('${props.img}')`
}))
</script>
<template>
    <div class="pb-4 px-4 rounded-3xl w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
        <div class="bg-cover bg-no-repeat pb-4 pt-96 px-4 rounded-3xl" :style="imgStyle">
            <NuxtLink :to="to" class="group">
                <div class="bg-primary-500 inline-block p-5 rounded-xl text-center w-full"><span class="font-medium text-center text-gray-900 text-xl">
            {{ action }} </span>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
<style scoped>
.main-call-to-action-card {
  color: green;
  font-weight: bold;
}
</style>
