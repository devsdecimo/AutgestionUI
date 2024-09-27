const { createGlobPatternsForDependencies } = require('@nx/vue/tailwind');
const { join } = require('path');
const { blue, green, yellow, red} = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    join(__dirname, 'index.html'),
    join(__dirname, '../../apps/**/*!(*.stories|*.spec).{vue,ts,tsx,js,jsx}'),
    join(__dirname, '../../libs/**/*!(*.stories|*.spec).{vue,ts,tsx,js,jsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        main: '#3377FF',
        error: '#FF3B3B',
        warning: '#F2C94C',
        info: '#0063F7',
        success: '#06C270',
        light: '#FAFAFC',
        light_gray: '#C7C9D9',
        base_gray: '#8F90A6',
        dark_gray: '#6B7588',
        dark: '#3A3A3C',
      }
    },
  },
  plugins: [],
}

module.exports = config;
