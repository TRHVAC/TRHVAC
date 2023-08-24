/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tr-red': '#FD2156',
        'tr-skyBlue': '#3F8BC4',
        'tr-gray': '#676661',
        'tr-blue': '#17366E',
        'tr-silver': '##D6D5D1',
        'tr-lightGray': '#F6F6F6',
        'tr-footerGray': '#A1A1A1',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial'],
      },
    },
  },
  plugins: [],
};
