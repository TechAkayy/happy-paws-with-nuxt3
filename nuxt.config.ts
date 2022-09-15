// Misc - from rc.10 onward defineNuxtConfig doesn't have to be imported. But red highlights in below export default
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@pinegrow/nuxt-module'],
	pinegrow: {
		liveDesigner: {
			usingStandaloneVueDevtools: true
		}
	}
})
