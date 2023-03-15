import type { Config } from 'tailwindcss'
import { pg_colors, pg_fonts } from './themes/pg-tailwindcss-theme.cjs'

export default <Partial<Config>>{
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  content: [
    './_pginfo/**/*.{html,js}', // used-classes.html (by pinegrow)
  ],
  theme: {
    extend: {
      colors: {
        ...(pg_colors as any),
      },
      fontFamily: pg_fonts as any,
      backgroundImage: {
        hero: "url('/images/hero-pattern.jpg')",
        'pg-logo': "url('/images/pg-logo-color.svg')", //
      },
    },
  },
}
