const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: colors.indigo,
      gray: colors.gray,
      white: colors.white,
      emerald: colors.emerald,
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '4rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
