<script setup>
	import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

	const heroImageUrlMdOrBelowClass =
		"bg-[url('https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwN3x8ZmluYW5jZXxlbnwwfHx8fDE2Mjg2NDA1NTc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1200&fit=max')]"

	const heroImageUrlLgOrAboveClass =
		"bg-[url('https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwN3x8ZmluYW5jZXxlbnwwfHx8fDE2Mjg2NDA1NTc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=2000&fit=max')]"

	const breakpoints = useBreakpoints(breakpointsTailwind)
	const isLgOrAbove = breakpoints.greaterOrEqual('lg')

	const heroImageUrlClass = $computed(() =>
		isLgOrAbove.value ? heroImageUrlLgOrAboveClass : heroImageUrlMdOrBelowClass
	)

	// style="
	// 	background-image: url('https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwN3x8ZmluYW5jZXxlbnwwfHx8fDE2Mjg2NDA1NTc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1200&fit=max');
	// "
</script>
<template>
    <section class="container mx-auto px-4 text-gray-300">
        <div class="overflow-hidden pb-6 poster pt-72 px-6 relative rounded-3xl md:py-36 lg:px-12">
            <div class="-mx-4 flex flex-wrap items-center lg:space-y-0 space-y-6">
                <div class="px-4 w-full md:w-8/12 xl:w-6/12">
                    <p class="font-bold font-serif mb-1 text-primary-500 text-xl uppercase">
						Adopt A Pet </p>
                    <h1 class="capitalize font-bold mb-2 text-4xl text-white md:leading-tight md:text-5xl lg:leading-tight lg:text-6xl">
						Thousands of homeless pets, one act of kindness </h1>
                    <p class="mb-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
						vitae congue tortor. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Curabitur ac sagittis neque, vel egestas est. </p>
                    <BaseNavButton to="/adopt">
                        <template v-slot:prepend>
                            <Icon name="noto:dog-face" size="36"></Icon>
                        </template>
                        <span>Adopt Now</span>
                        <template v-slot:append>
                            <Icon name="noto:dog-face" size="24"></Icon>
                        </template>
                    </BaseNavButton>
                    <BaseNavButton to="/adopt">
                        <span>Adopt Now</span>
                        <template v-slot:append>
                            <Icon name="noto:dog-face" size="24"></Icon>
                        </template>
                    </BaseNavButton>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>.poster { z-index: 0; } .poster:before { background-image: url(https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwN3x8ZmluYW5jZXxlbnwwfHx8fDE2Mjg2NDA1NTc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1200&fit=max) !important; background-size: cover; background-position: center center; background-repeat: no-repeat; content: ' '; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; position: absolute; } @media (min-width: 1440px),
		(min-width: 992px) and (-webkit-min-device-pixel-ratio: 2),
		(min-width: 992px) and (min-resolution: 192dpi) { .poster:before {  background-image: url(https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwN3x8ZmluYW5jZXxlbnwwfHx8fDE2Mjg2NDA1NTc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=2000&fit=max) !important; } }</style>
