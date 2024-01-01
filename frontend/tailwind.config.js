/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fdf5f3',
          '100': '#fbe9e5',
          '200': '#f8d7d0',
          '300': '#f3b9ae',
          '400': '#e99180',
          '500': '#e07b67',
          '600': '#c8513a',
          '700': '#a8412d',
          '800': '#8b3929',
          '900': '#743528',
          '950': '#3f1810',
        },
        dark10: '#121214',
        dark20: '#17171A',
        dark30: '#202024',
        dark40: '#252529',
        dark50: '#AFABB6',
      },
      boxShadow: { 
        'test': "rgba(210, 210, 210, 0.2) 0px 3px 15px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
      }
    },
  },
  plugins: [],
}

