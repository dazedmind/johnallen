module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    color: {
      gray: {
        dark: '#2e2e2e',
      },
    },
    extend: {
      fontFamily:{
        'custom':['Padauk'],
      },
      colors:{
        gray: {
          light: '#333333',
          dark: '#1c1c1c',
          darker: '#161616',
        },
        teal: {
          default: '#008080',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
