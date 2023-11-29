/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: ['Roboto', 'sans-serif'],
      colors: {
        background: '#ECF0F1',
        button: '#2ECC71',
        text: '#34495E',

        primary: '#2C3E50',
        error: '#E74C3C',
      },
    },
  },
  plugins: [],
};
