const { pg_colors, pg_fonts } = require('./themes/pg-tailwindcss-theme.cjs')

module.exports = {
  plugins: [
    /*require('@tailwindcss/typography'), require('daisyui')*/
  ],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './_pginfo/**/*.{html,js}', // used-classes.html (by pinegrow)
  ],
  theme: {
    extend: {
      colors: { ...pg_colors },
      fontFamily: pg_fonts,
      backgroundImage: {
        hero: "url('/images/hero-pattern.jpg')",
        'pg-logo': "url('/images/pg-logo-color.svg')", //
      },
    },
  },
}
