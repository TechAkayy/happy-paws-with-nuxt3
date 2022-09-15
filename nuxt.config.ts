// Misc - from rc.10 onward defineNuxtConfig doesn't have to be imported. But red highlights in below export default
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	// ssr: false,
	modules: ['@pinegrow/nuxt-module', '@nuxtjs/tailwindcss', 'nuxt-directus'],
	pinegrow: {
		liveDesigner: {
			usingStandaloneVueDevtools: true
		}
	},
	directus: {
		url: 'https://hlursirm.directus.app'
	}
})
