const plugins = require('tailwind-react-ui/plugins');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#3598DB',
      'secondary': '#ffed4a',
      'danger': '#A91F0F',
    }),
    textColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#3598DB',
      'secondary': '#ffed4a',
      'danger': '#A91F0F',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [
    ...Object.keys(plugins).map(name => plugins[name]()),
    require('@tailwindcss/forms'),
  ],
}
