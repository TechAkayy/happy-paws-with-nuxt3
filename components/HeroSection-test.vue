<script setup>

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { usePinegrow } from "@pinegrow/vite-plugin/vue";
const { pgUpdateElCache } = usePinegrow()

const { data: pets } = await useAsyncData('pets', async () => {
  return await usePets()
})

const pet = computed(() => {
  return pets.value[2]
})

const pet2 = computed(() => {
  return pets.value[0]
})

const pet0 = computed(() => {
  return pets.value[0]
})

const { getItems } = useDirectusItems()
const petsNew = await getItems({ collection: 'Pets' })

const heroImageUrlMdOrBelowClass =
  "bg-[url('https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwN3x8ZmluYW5jZXxlbnwwfHx8fDE2Mjg2NDA1NTc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1200&fit=max')]"

const heroImageUrlLgOrAboveClass =
  "bg-[url('https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwN3x8ZmluYW5jZXxlbnwwfHx8fDE2Mjg2NDA1NTc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=2000&fit=max')]"

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLgOrAbove = breakpoints.greaterOrEqual('lg')

// const heroImageUrlClass = computed(() =>
// 	isLgOrAbove.value ? heroImageUrlLgOrAboveClass : heroImageUrlMdOrBelowClass
// )

// style="
// 	background-image: url('https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwN3x8ZmluYW5jZXxlbnwwfHx8fDE2Mjg2NDA1NTc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1200&fit=max');
// " 


</script>
<template :onVnodeMounted="pgUpdateElCache('mounted', 26)" :onVnodeUpdated="pgUpdateElCache('updated', 26)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 26)">
    <section class="container mx-auto px-4 text-gray-300" :onVnodeMounted="pgUpdateElCache('mounted', 27)" :onVnodeUpdated="pgUpdateElCache('updated', 27)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 27)">
        <div class="overflow-hidden pb-6 poster pt-72 px-6 relative rounded-3xl md:py-36 lg:px-12" :onVnodeMounted="pgUpdateElCache('mounted', 28)" :onVnodeUpdated="pgUpdateElCache('updated', 28)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 28)">
            <div class="-mx-4 flex flex-wrap items-center lg:space-y-0 space-y-6" :onVnodeMounted="pgUpdateElCache('mounted', 29)" :onVnodeUpdated="pgUpdateElCache('updated', 29)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 29)">
                <div class="px-4 w-full md:w-8/12 xl:w-6/12" :onVnodeMounted="pgUpdateElCache('mounted', 30)" :onVnodeUpdated="pgUpdateElCache('updated', 30)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 30)">
                    <p class="font-bold font-serif mb-1 text-primary-500 text-xl uppercase" :onVnodeMounted="pgUpdateElCache('mounted', 31)" :onVnodeUpdated="pgUpdateElCache('updated', 31)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 31)">
            Adopt A Pet </p>
                    <h1 class="capitalize font-bold mb-2 pb-3.5 pl-2.5 text-4xl text-white md:leading-tight md:text-5xl lg:leading-tight lg:text-6xl 2xl:ml-80 2xl:pl-80" :onVnodeMounted="pgUpdateElCache('mounted', 32)" :onVnodeUpdated="pgUpdateElCache('updated', 32)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 32)">
            Thousands of homeless pets, one act of kindness - {{ pet2.Name }} </h1>
                    <p class="mb-6" :onVnodeMounted="pgUpdateElCache('mounted', 33)" :onVnodeUpdated="pgUpdateElCache('updated', 33)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 33)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae congue tortor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur ac sagittis neque, vel egestas est. </p>
                    <!-- <BaseNavButton v-for="val in 4" :key="val" to="/donate">
                        <span>Donate</span>
                        <template v-slot:append>
                            <Icon name="lucide:heart-handshake" size="24" class="text-red-800">
</Icon>
                        </template>
                    </BaseNavButton> -->
                    <BaseNavButton to="/adopt" :onVnodeMounted="pgUpdateElCache('mounted', 34)" :onVnodeUpdated="pgUpdateElCache('updated', 34)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 34)"><span :onVnodeMounted="pgUpdateElCache('mounted', 35)" :onVnodeUpdated="pgUpdateElCache('updated', 35)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 35)">Adopt Now</span>
                        <template v-slot:append :onVnodeMounted="pgUpdateElCache('mounted', 36)" :onVnodeUpdated="pgUpdateElCache('updated', 36)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 36)">
                            <Icon name="emojione:cat-face" size="36" :onVnodeMounted="pgUpdateElCache('mounted', 37)" :onVnodeUpdated="pgUpdateElCache('updated', 37)" :onVnodeUnmounted="pgUpdateElCache('unmounted', 37)">
</Icon>
                        </template>
                    </BaseNavButton>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.poster,
.pg-node-id-1,
.pg-main-cs-13,
.pg-file-cs-13 {
  z-index: 0;
}

.poster:before,
.pg-node-id-2,
.pg-main-cs-13,
.pg-file-cs-13 {
  background-image: url(https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwN3x8ZmluYW5jZXxlbnwwfHx8fDE2Mjg2NDA1NTc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1200&fit=max) !important;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  content: ' ';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
}

@media (min-width: 1440px),
(min-width: 992px) and (-webkit-min-device-pixel-ratio: 2),
(min-width: 992px) and (min-resolution: 192dpi) {

  .poster:before,
  .pg-node-id-3,
  .pg-main-cs-13,
  .pg-file-cs-13 {
    background-image: url(https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwN3x8ZmluYW5jZXxlbnwwfHx8fDE2Mjg2NDA1NTc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=2000&fit=max) !important;
  }
}
</style>
