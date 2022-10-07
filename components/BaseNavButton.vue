<script setup>
	defineProps({
		to: {
			type: String,
			required: true
		}
	})
</script>
<template>
    <NuxtLink to="/adopt" class="bg-primary-500 hover:bg-primary-600 inline-block px-6 py-2 rounded-full text-gray-900">
        <slot name="prepend"></slot>
        <slot>Button</slot>
        <span class="ml-5"><slot name="append"></slot></span>
    </NuxtLink>
</template>
<style scoped>
	.name {
		color: green;
		font-weight: bold;
	}
</style>
