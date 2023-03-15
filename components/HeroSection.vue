<script setup>
  import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

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
<template>
    <section class="container mx-auto px-4 text-gray-300">
        <div class="overflow-hidden shadow-2xl pb-6 poster pt-72 px-6 relative rounded-3xl md:py-36 lg:px-12 bg-gray-100">
            <div class="-mx-4 flex flex-wrap items-center lg:space-y-0 space-y-6">
                <div class="px-4 w-full md:w-8/12 xl:w-6/12">
                    <p class="font-bold font-serif mb-1 text-primary-500 text-xl uppercase tracking-widest">
            Adopt A Beagle </p>
                    <p class="mb-6 text-gray-700 tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae congue tortor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur ac sagittis neque, vel egestas est. </p>
                    <BaseNavButton to="/adopt" class="inline-flex items-center bg-primary-500 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-full">
                        <span>Adopt Now</span>
                        <template v-slot:append>
                            <Icon name="noto:dog-face" size="36" class="ml-2"></Icon>
                        </template>
                    </BaseNavButton>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
  .poster {
    z-index: 0;
  }
  .poster:before {
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
    .poster:before {
      background-image: url(https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwN3x8ZmluYW5jZXxlbnwwfHx8fDE2Mjg2NDA1NTc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=2000&fit=max) !important;
    }
  }
  .mybkg {
    color: #64a49c;
  }
</style>
