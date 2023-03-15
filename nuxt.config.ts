// Misc - from rc.10 onward defineNuxtConfig doesn't have to be imported. But red highlights in below export default

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // ssr: false,
  // htmlValidator: {
  // 	usePrettier: true
  // },
  modules: [
    // '@nuxtjs/html-validator',
    // '@pinegrow/nuxt-module',
    // '@nuxtjs/tailwindcss',
    'nuxt-directus',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-icon',
    // '@nuxt/devtools',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  icon: {},
  devtools: {
    enabled: false,
    vscode: {
      enabled: true,
      startOnBoot: true,
      // mode: 'tunnel',
      // tunnel: {
      //   name: 'https://vscode.dev/tunnel/M1Proexetelcomau',
      // },
    },
  },
  // tailwindcss: {
  //   configPath: 'tailwind.config.ts',
  //   cssPath: 'assets/css/tailwind.css',
  // },

  directus: {
    url: 'https://hlursirm.directus.app',
  },
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    highlight: {
      theme: 'dracula-soft',
    },
  },
  // ignore: ['./_pginfo/**/*.{html,js}'],
  // ignore: ['**/used-classes.html'],

  // experimental: {
  // 	reactivityTransform: true
  // },
  // vue: {
  // 	compilerOptions: {
  // 		reactivityTransform: true
  // 	}
  // }
})
