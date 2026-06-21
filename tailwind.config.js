/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // OSO brand palette (sampled from the logo). 'navy' is kept as the
        // token name but now holds the brand warm-black used for dark surfaces.
        'navy': '#221e1f',        // warm black — headers, footer, hero, dark sections
        'navy-light': '#3d3537',  // warm dark gray — gradients / hovers
        'accent-orange': '#f37221',
        'accent-green': '#4caf50',
        'brand-gray': '#848688',
        'brand-black': '#221e1f',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
