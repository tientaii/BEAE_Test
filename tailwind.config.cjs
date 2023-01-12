// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
      },

      colors: {
        primary: '#f4f4f4',
      },

      boxShadow: {
        '3xl': '0px 0px 27px rgb(0 0 0 / 5%)',
      },
    },
  },
  plugins: [],
};
