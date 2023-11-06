import { nextui } from '@nextui-org/react'
import colors from 'tailwindcss/colors'
import { defaultTheme } from './src/styles/default'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        baloo2: ["'Baloo 2'", 'sans-serif'],
      },
      colors: {
        ...colors,
        ...defaultTheme,
      },
    },
  },
  plugins: [nextui({})],
}
