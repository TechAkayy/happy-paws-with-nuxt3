// Misc - from rc.10 onward defineNuxtConfig doesn't have to be imported. But red highlights in below export default
import { defineNuxtConfig } from 'nuxt'
import { tailwindParser } from '@pinegrow/tailwind-plugin'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	// ssr: false,
	modules: [
		'@pinegrow/nuxt-module',
		'@nuxtjs/tailwindcss',
		'nuxt-directus',
		'@nuxt/content'
	],
	pinegrow: {
		liveDesigner: {
			plugins: [tailwindParser],
			tailwindParser: {
				configFile: 'tailwind.config.js',
				cssFile: 'assets/css/tailwind.css'
			},
			usingStandaloneVueDevtools: true
		}
	},
	directus: {
		url: 'https://hlursirm.directus.app'
	},
	content: {
		markdown: {
			toc: {
				depth: 3,
				searchDepth: 3
			}
		},
		highlight: {
			theme: 'dracula-soft'
		}
	}
})
