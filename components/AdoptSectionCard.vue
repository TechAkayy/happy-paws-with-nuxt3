<script setup>
const props = defineProps({
  pet: {
    type: Object,
    required: true
  }
})

const { id: id, Name: name, Species: species, Breed: breed, Sex: sex, Date_Of_Birth: dateOfBirth, Image_URL: imageUrl } = toRefs(props.pet)

</script>
<template>
    <div class="p-3 w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
        <div class="bg-white px-6 py-12 rounded-3xl text-center text-gray-400">
            <img :src="imageUrl" class="mb-4 mx-auto rounded-xl w-full sm:w-9/12" alt="..." width="600" height="600"/>
            <h4 class="font-bold mb-2 mytext text-2xl text-gray-900">{{ name }}</h4>
            <p class="mb-6 mytxt text-primary-500 text-sm">
        {{ breed }} </p>
            <BaseNavButton :to="`/adopt/${id}`"><span class="text-pink-500">Adopt Now</span>
                <template v-slot:append>
                    <Icon name="ri:heart-add-fill" size="24" class="text-yellow-700"></Icon>
                </template>
            </BaseNavButton>
        </div>
    </div>
</template>
<style scoped>.adopt-section-card { color: green; font-weight: bold; } .mytext { background-color: #83cf97; } .mytxt { color: #aa63ba; }</style>
