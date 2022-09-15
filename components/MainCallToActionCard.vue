<script setup>
	defineProps({
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
</script>

<template>
	<div class="p-4 w-full md:w-6/12 lg:w-4/12">
		<NuxtLink :to="to" class="group"
			><div class="overflow-hidden relative rounded-3xl">
				<img
					:src="img"
					class="group-hover:opacity-90 w-full"
					alt="..."
					width="900"
					height="1000"
				/>
				<div
					class="absolute bg-primary-500 bottom-0 inset-x-0 mb-5 mx-5 p-5 rounded-xl"
				>
					<h4 class="font-medium text-gray-900 text-xl">{{ action }}</h4>
				</div>
			</div></NuxtLink
		>
	</div>
</template>

<style scoped></style>
