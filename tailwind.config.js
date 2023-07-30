/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary : '#FF6363',
        secondary : {
          100 : '#E2E2D5', //light version
          200 : '#888883', // dark version

        }
      },
      fontFamily : {
        body : ['Nunito']
      }

    },
  },
  plugins: [],
}

