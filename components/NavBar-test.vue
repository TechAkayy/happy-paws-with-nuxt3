<script setup>

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { usePinegrow } from "~/composables/vue-plugin";
const { vDataPgId, refDataPgId, emitDataPgId } = usePinegrow()

const route = useRoute()
let currentRoutePath = computed(() => (route && route.path) || '/')

const navItems = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Adopt Now',
    to: '/adopt'
  },
  {
    name: 'Voluteer',
    to: '/volunteer'
  },
  {
    name: 'Our Mission',
    to: '/our-mission'
  },
  {
    name: 'Blog',
    to: '/blog'
  },
  {
    name: 'Donate',
    to: '/donate'
  }
]
const navItemsFiltered = navItems.filter((nav) => nav.name !== 'Donate')

const breakpoints = useBreakpoints(breakpointsTailwind)
const smallerThanLg = breakpoints.smaller('lg')

const navOpen = ref(false)
const navOpenInSmallerThanlg = computed(
  () => !smallerThanLg.value || navOpen.value
)

const navOpenClass = computed(() => [
  navOpen.value ? 'text-secondary-500' : 'text-primary-500',
  navOpen.value ? 'bg-primary-500' : ''
])

</script>
<template v-data-pg-id="57">
  <div class="container mx-auto relative" v-data-pg-id="58">
    <nav class="flex items-start justify-between lg:items-center p-4" v-data-pg-id="59">
      <NuxtLink to="/"
        class="capitalize flex font-bold font-serif hover:text-opacity-75 items-center text-gray-900 text-xl"
        :ref="refDataPgId(60)">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="2em" xml:space="preserve" fill="currentColor"
          stroke-width="3px" viewBox="0 0 240 240" height="2em" class="mr-2" v-data-pg-id="61">
          <g transform="translate(17.704 -9.215)" v-data-pg-id="62">
            <path
              d="M92.45 183.38a61.38 61.38 0 00-30.07 15.35 9.84 9.84 0 01-15.9-3.73 61.65 61.65 0 11115.83-.18 9.87 9.87 0 01-16 3.9 61.43 61.43 0 00-30.07-15.35"
              fill="#99cd31" stroke="#475f17" stroke-miterlimit="10" stroke-width="12" v-data-pg-id="63"></path>
            <circle cx="17.18" cy="17.18" r="17.18" transform="rotate(-22.39 282.115 44.556)" fill="#99cd31"
              stroke="#475f17" stroke-miterlimit="10" stroke-width="12" v-data-pg-id="64"></circle>
            <circle cx="17.18" cy="17.18" r="17.18" transform="rotate(-22.39 179.693 -83.499)" fill="#99cd31"
              stroke="#475f17" stroke-miterlimit="10" stroke-width="12" v-data-pg-id="65"></circle>
            <circle cx="17.18" cy="17.18" r="17.18" transform="rotate(-67.61 176.48 -54.394)" fill="#99cd31"
              stroke="#475f17" stroke-miterlimit="10" stroke-width="12" v-data-pg-id="66"></circle>
            <circle cx="17.18" cy="17.18" r="17.18" transform="rotate(-67.61 119.616 -48.074)" fill="#99cd31"
              stroke="#475f17" stroke-miterlimit="10" stroke-width="12" v-data-pg-id="67"></circle>
            <circle cx="3.19" cy="3.19" r="3.19" transform="translate(101.16 179.05)" fill="#475f17" v-data-pg-id="68">
            </circle>
            <path d="M89.72 137a20.84 20.84 0 00-20.84 20.84v.16" fill="none" stroke="#475f17" stroke-miterlimit="10"
              stroke-width="12" v-data-pg-id="69"></path>
            <path
              d="M15.7 47.82h-2.75v-2.76a3.4 3.4 0 00-6.79 0v2.76H3.4a3.4 3.4 0 000 6.79h2.75v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79zm172.43 9.55h-2.76v-2.76a3.4 3.4 0 00-6.79 0v2.76h-2.76a3.4 3.4 0 000 6.79h2.76v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79zM25.25 203.82H22.5v-2.76a3.4 3.4 0 00-6.79 0v2.76h-2.76a3.4 3.4 0 000 6.79h2.75v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79z"
              fill="#475f17" v-data-pg-id="70"></path>
          </g>
        </svg><span v-data-pg-id="71">Happy paws</span>
      </NuxtLink>
      <div class="absolute flex flex-col right-0 z-10 lg:static" v-data-pg-id="72">
        <button type="button"
          class="hover:bg-primary-500 hover:text-secondary-500 ml-auto mr-4 px-3 py-2 rounded lg:hidden"
          :class="navOpenClass" @click="navOpen = !navOpen" v-data-pg-id="73"><span
            class="block border-b-2 border-current my-1 w-6" v-data-pg-id="74"></span>
          <span class="block border-b-2 border-current my-1 w-6" v-data-pg-id="75"></span>
          <span class="block border-b-2 border-current my-1 w-6" v-data-pg-id="76"></span>
        </button>
        <div class="bg-gray-100 flex flex-col items-end p-4 lg:flex-row lg:items-center lg:p-0"
          v-if="navOpenInSmallerThanlg" v-data-pg-id="77">
          <NuxtLink v-for="(nav, index) in navItemsFiltered" class="hover:text-primary-600 p-4" :to="nav.to"
            :class="{ 'text-primary-600': nav.to === currentRoutePath }" @click="navOpen = false"
            :ref="refDataPgId(78)">
            <span v-data-pg-id="79">{{
              nav.name
            }}</span>
          </NuxtLink>
          <div :class="{ 'bg-primary-600': currentRoutePath === '/donate' }" v-data-pg-id="80">
            <BaseNavButton v-for="val in 4" :key="val" to="/donate" :ref="refDataPgId(81)">
              <span v-data-pg-id="82">Donate</span>
              <template v-slot:append v-data-pg-id="83">
                <Icon name="lucide:heart-handshake" size="24" class="text-red-800" :ref="refDataPgId(84)">
                </Icon>
              </template>
            </BaseNavButton>
            <!-- <BaseNavButton v-for="val in 4" :key="val" to="/donate"><span>Donate</span>
              <template v-slot:append>
                <Icon name="lucide:heart-handshake" size="24" class="text-red-800">
                </Icon>
              </template>
            </BaseNavButton> -->
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>

</style>
