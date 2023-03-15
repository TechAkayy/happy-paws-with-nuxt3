module.exports = {
  liveDesigner: {
    // mappingType: 'type2',
    // configPath: './nuxt.config1.ts',
    plugins: [
      /*'@nuxt/content'*/
    ],
    tailwindcss: {
      configPath: 'tailwind.config.ts',
      cssPath: './assets/css/tailwind.css',
      restartOnThemeUpdate: false, // display in config
      // themePath: './assets/css/theme.cjs',
      //   // 			configPath: {
      //   // 				// plugins: [require('daisyui')], // passing actual config to the parser can't have plugins as they won't be available, so this will error out
      //   // 				theme: {
      //   // 					extend: {
      //   // 						colors: {
      //   // 							gold: {
      //   // 								light: '#ddbf5f', // eg, bg-gold-light, text-gold-light
      //   // 								base: '#d4af37',
      //   // 								dark: '#aa8c2c'
      //   // 							}
      //   // 						},
      //   // 						backgroundImage: {
      //   // 							hero: "url('/images/hero-pattern.jpg')", // bg-hero
      //   // 							'pg-logo': "url('/images/pg-logo-color.svg')" //bg-pg-logo
      //   // 						}
      //   // 					}
      //   // 				}
      //   // 			},

      //   // 			cssPath: `
      //   //   @import url('https://fonts.googleapis.com/css?family=Space+Grotesk:300,400,500,600,700&display=swap');

      //   //   @tailwind base;
      //   //   @tailwind components;
      //   //   @tailwind utilities;

      //   //   @layer components {
      //   //     .btn-blue {
      //   //       @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
      //   //     }
      //   //   }

      //   //   @layer utilities {
      //   //     .filter-grayscale {
      //   //       filter: grayscale(100%);
      //   //     }
      //   //   }
      //   // `
    },

    customTypes: {
      Icon: {
        name: {
          customType: 'icon',
        },
        size: {
          customType: 'select',
          options: ['16', '24', '36'],
        },
      },
    },
    devtoolsKey: 'devtools',
    vscodeTunnelUrl: 'https://vscode.dev/tunnel/techakayy',
  },
}
