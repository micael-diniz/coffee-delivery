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
    screens: {
      xsm: { min: '320px' },
      sm: { min: '640px' },
      md: { min: '768px' },
      lg: { min: '1024px' },
      '2lg': { min: '1168px' },
      xl: { min: '1280px' },
      '2xl': { min: '1536px' },
    },
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
