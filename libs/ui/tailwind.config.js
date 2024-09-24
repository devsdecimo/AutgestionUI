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
        primary: blue['500'],
        success: green['500'],
        warning: yellow['500'],
        danger: red['500'],
      }
    },
  },
  plugins: [],
}

module.exports = config;
