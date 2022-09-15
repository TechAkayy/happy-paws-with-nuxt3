<script setup>
	defineProps({
		id: {
			type: Number,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		species: {
			type: String,
			required: true
		},
		breed: {
			type: String,
			required: true
		},
		sex: {
			type: String,
			required: true
		},
		dateOfBirth: {
			type: String,
			required: false
		},
		imageUrl: {
			type: String,
			required: true
		}
	})
</script>

<template>
	<div class="p-3 w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
		<div class="bg-white px-6 py-12 rounded-3xl text-center text-gray-400">
			<img :src="imageUrl" class="mb-4 mx-auto rounded-xl w-full sm:w-9/12" alt="..." width="600" height="600"/>
			<h4 class="font-bold mb-2 text-2xl text-gray-900">{{ name }}</h4>
			<p class="mb-6 text-sm">
				{{ breed }}
			</p>
			<NuxtLink :to="`/adopt/${id}`" class="bg-primary-500 hover:bg-primary-600 inline-block px-6 py-2 rounded-full text-gray-900">Adopt Now</NuxtLink>
		</div>
	</div>
</template>

<style scoped></style>
