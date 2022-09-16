<script setup>
	const callToActions = [
		{
			img: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwfHxkb2clMjBob3VzZXxlbnwwfHx8fDE2MzA0NjM2Mzg&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop',
			action: 'Adopt',
			to: '/adopt'
		},
		{
			img: 'https://images.unsplash.com/photo-1499946682598-202f5b527154?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDkzfHxmZWVkJTIwaGFtc3RlcnxlbnwwfHx8fDE2MzA0NjQ1Mzc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop',
			action: 'Volunteer',
			to: '/volunteer'
		},
		{
			img: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDR8fHBldHxlbnwwfHx8fDE2MzA0NjI1MjM&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop',
			action: 'Donate',
			to: '/donate'
		}
	]
</script>

<template>
	<div class="container mx-auto px-4 py-12">
		<div class="-mx-4 flex flex-wrap items-center justify-center mb-12">
			<div class="px-4 text-center w-full md:w-10/12 xl:w-9/12">
				<h2 class="font-medium mb-2 text-primary-600 uppercase">
					Get Involved
				</h2>
				<h3 class="capitalize font-bold mb-4 text-4xl text-gray-800">
					Small gesture for a big impact
				</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
		</div>
		<div class="-mx-4 flex flex-wrap justify-center text-center">
			<MainCallToActionCard v-for="(callToAction, index) in callToActions" :img="callToAction.img" :action="callToAction.action" :to="callToAction.to" :key="index"/>
		</div>
	</div>
</template>

<style scoped></style>
