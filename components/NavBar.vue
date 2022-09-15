<script setup></script>

<template>
	<div class="container mx-auto relative" data-pg-collapsed>
		<nav class="flex flex-wrap items-center p-4">
			<NuxtLink
				to="/"
				class="font-bold font-serif hover:text-opacity-75 inline-flex items-center leading-none mr-4 text-gray-900 text-xl"
			>
				<svg
					version="1.0"
					xmlns="http://www.w3.org/2000/svg"
					width="2em"
					xml:space="preserve"
					fill="currentColor"
					stroke-width="3px"
					viewBox="0 0 240 240"
					height="2em"
					class="mr-2"
				>
					<g transform="translate(17.704 -9.215)">
						<path
							d="M92.45 183.38a61.38 61.38 0 00-30.07 15.35 9.84 9.84 0 01-15.9-3.73 61.65 61.65 0 11115.83-.18 9.87 9.87 0 01-16 3.9 61.43 61.43 0 00-30.07-15.35"
							fill="#99cd31"
							stroke="#475f17"
							stroke-miterlimit="10"
							stroke-width="12"
						></path>
						<circle
							cx="17.18"
							cy="17.18"
							r="17.18"
							transform="rotate(-22.39 282.115 44.556)"
							fill="#99cd31"
							stroke="#475f17"
							stroke-miterlimit="10"
							stroke-width="12"
						></circle>
						<circle
							cx="17.18"
							cy="17.18"
							r="17.18"
							transform="rotate(-22.39 179.693 -83.499)"
							fill="#99cd31"
							stroke="#475f17"
							stroke-miterlimit="10"
							stroke-width="12"
						></circle>
						<circle
							cx="17.18"
							cy="17.18"
							r="17.18"
							transform="rotate(-67.61 176.48 -54.394)"
							fill="#99cd31"
							stroke="#475f17"
							stroke-miterlimit="10"
							stroke-width="12"
						></circle>
						<circle
							cx="17.18"
							cy="17.18"
							r="17.18"
							transform="rotate(-67.61 119.616 -48.074)"
							fill="#99cd31"
							stroke="#475f17"
							stroke-miterlimit="10"
							stroke-width="12"
						></circle>
						<circle
							cx="3.19"
							cy="3.19"
							r="3.19"
							transform="translate(101.16 179.05)"
							fill="#475f17"
						></circle>
						<path
							d="M89.72 137a20.84 20.84 0 00-20.84 20.84v.16"
							fill="none"
							stroke="#475f17"
							stroke-miterlimit="10"
							stroke-width="12"
						></path>
						<path
							d="M15.7 47.82h-2.75v-2.76a3.4 3.4 0 00-6.79 0v2.76H3.4a3.4 3.4 0 000 6.79h2.75v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79zm172.43 9.55h-2.76v-2.76a3.4 3.4 0 00-6.79 0v2.76h-2.76a3.4 3.4 0 000 6.79h2.76v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79zM25.25 203.82H22.5v-2.76a3.4 3.4 0 00-6.79 0v2.76h-2.76a3.4 3.4 0 000 6.79h2.75v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79z"
							fill="#475f17"
						></path>
					</g></svg
				><span>Happy Paws</span>
			</NuxtLink>
			<button
				class="hover:bg-primary-500 hover:text-secondary-500 lg:hidden ml-auto px-3 py-2 rounded text-primary-500"
				data-name="nav-toggler"
				data-pg-ia='{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"class.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}'
				data-pg-ia-apply="$nav [data-name=nav-toggler]"
			>
				<span class="block border-b-2 border-current my-1 w-6"></span>
				<span class="block border-b-2 border-current my-1 w-6"></span>
				<span class="block border-b-2 border-current my-1 w-6"></span>
			</button>
			<div
				class="flex-1 hidden space-y-2 w-full lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto"
				data-name="nav-menu"
			>
				<div class="flex flex-col ml-auto lg:flex-row">
					<NuxtLink
						to="/"
						class="hover:text-primary-500 py-2 text-gray-500 lg:p-4"
						>Home</NuxtLink
					>
					<NuxtLink
						to="/about-us"
						class="hover:text-primary-500 py-2 text-gray-500 lg:p-4"
						>About Us</NuxtLink
					>
					<NuxtLink
						to="/services"
						class="hover:text-primary-500 py-2 text-gray-500 lg:p-4"
						>Services</NuxtLink
					>
					<NuxtLink
						to="/adopt"
						class="hover:text-primary-500 py-2 text-gray-500 lg:p-4"
						>Adopt</NuxtLink
					>
					<NuxtLink
						to="/volunteer"
						class="hover:text-primary-500 py-2 text-gray-500 lg:p-4"
						>Volunteer</NuxtLink
					>
				</div>
				<NuxtLink
					to="/donate"
					class="bg-primary-500 hover:bg-primary-600 inline-block px-6 py-2 rounded-full text-center text-gray-900"
					>Donate</NuxtLink
				>
			</div>
		</nav>
	</div>
</template>

<style scoped></style>
