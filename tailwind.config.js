/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'spectral': ['Spectral'],
        'mont': ['Montserrat'],
        'robo': ['Roboto'],
        'sour': ['Source Code Pro']
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.masked-image': {
          'mask-image': 'radial-gradient(ellipse, black 50%, transparent 74%)',
          '-webkit-mask-image': 'radial-gradient(ellipse, black 50%, transparent 74%)', // Para Safari
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
