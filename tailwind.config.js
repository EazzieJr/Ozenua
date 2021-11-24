module.exports = {
  // mode: 'jit',
  purge: [
    // './src/**/*.html',
    // './src/**/*.js',
    // './src/**/*.css',
    // './fonts/euclid/*.css'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontSize: {
      'tiny': '.6rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      'lg3xl': '2rem',
      '4xl': '2.25rem',
      'lg4xl': '2.5rem',
      '5xl': '3rem',
      'lg5xl': '3.5rem',
      '6xl': '4rem',
      'lg6xl': '4.5rem',
      '7xl': '5rem',
      'lg7xl': '5.5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem',
      '11xl': '10rem',
      '12xl': '12rem',
      '13xl': '13rem'
    },

    extend: {
      fontFamily: {
        sarala: ['Sarala'],
        jolly: ['Jolly Lodger'],
        montserrat: ['Montserrat'],
        alternative: ['Montserrat Alternatives'],
        quicksand: ['Quicksand'],
        cabin: ['Cabin'],
        rubik: ['Rubik'],
        manrope: ['Manrope'],
        josefin: ['Josefin Sans'],
        caudex: ['Caudex'],
        roboto: ['Roboto'],
        opensans: ['Open Sans']
      },

      textColor: {
        'primary': '#909090',
        'light': '#F1F1F1',
        'dark': '#18161D'
      },
      colors: {
        'dark': '#0C0B0E',
        'darkblock': '#141217',
        'lightblock ': '#F2F2F2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
