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
<template v-data-pg-id="88">
  <section class="container mx-auto px-4 text-gray-300" v-data-pg-id="89">
    <div class="overflow-hidden pb-6 poster pt-72 px-6 relative rounded-3xl md:py-36 lg:px-12" v-data-pg-id="90">
      <div class="-mx-4 flex flex-wrap items-center lg:space-y-0 space-y-6" v-data-pg-id="91">
        <div class="px-4 w-full md:w-8/12 xl:w-6/12" v-data-pg-id="92">
          <p class="font-bold font-serif mb-1 text-primary-500 text-xl uppercase" v-data-pg-id="93">
            Adopt A Pet </p>
          <h1
            class="capitalize font-bold mb-2 pb-3.5 pl-2.5 text-4xl text-white md:leading-tight md:text-5xl lg:leading-tight lg:text-6xl 2xl:ml-80 2xl:pl-80"
            v-data-pg-id="94">
            Thousands of homeless pets, one act of kindness - {{ pet2.Name }} </h1>
          <p class="mb-6" v-data-pg-id="95">
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
          <BaseNavButton to="/adopt" :ref="refDataPgId(96)">
            <span v-data-pg-id="97">Adopt Now</span>
            <template v-slot:append v-data-pg-id="98">
              <Icon name="emojione:cat-face" size="36" :ref="refDataPgId(99)"></Icon>
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
.pg-main-cs-42,
.pg-file-cs-42 {
  z-index: 0;
}

.poster:before,
.pg-node-id-2,
.pg-main-cs-42,
.pg-file-cs-42 {
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
  .pg-main-cs-42,
  .pg-file-cs-42 {
    background-image: url(https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwN3x8ZmluYW5jZXxlbnwwfHx8fDE2Mjg2NDA1NTc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=2000&fit=max) !important;
  }
}
</style>
