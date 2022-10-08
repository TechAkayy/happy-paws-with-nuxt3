<script setup>
	const { data: pets } = await useAsyncData('pets', async () => {
		return await usePets()
	})

	// const pets = await usePets()
</script>
<template>
	<section class="bg-primary-500 py-24 text-center text-gray-50">
		<div class="container mx-auto px-4">
			<div class="-mx-4 flex flex-wrap items-center justify-center mb-12">
				<div class="px-4 text-center w-full md:w-10/12 xl:w-9/12">
					<h2 class="font-medium mb-2 uppercase">Adopt A Pet</h2>
					<h3 class="capitalize font-bold mb-4 text-4xl text-white">
						Small gesture for a big impact
					</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>
			<div class="-mx-3 flex flex-wrap justify-center mb-12">
				<AdoptSectionCard
					v-for="(pet, index) in pets"
					:breed="pet.Breed"
					:date-of-birth="pet.Date_Of_Birth"
					:id="pet.id"
					:image-url="pet.Image_URL"
					:name="pet.Name"
					:sex="pet.Sex"
					:species="pet.Species"
				/>
			</div>
			<div>
				<NuxtLink
					to="/adopt"
					class="bg-secondary-500 hover:bg-secondary-600 inline-block px-6 py-2 rounded-full text-white"
					>Meet Them All</NuxtLink
				>
			</div>
		</div>
	</section>
</template>
<style scoped>
	.adopt-section {
		color: green;
		font-weight: bold;
	}
</style>
