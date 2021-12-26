module.exports = {
  mode: "jit",
  darkMode: 'media',
  purge:  [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      translate: {
        '55': '-50%'
      },
      backgroundImage: {
        'top-image': "url('/assets/home-img.jpg')",
        'cloud-day': "url('/assets/cloud-day.jpg')",
        'cloud-night': "url('/assets/cloud-night.jpg')",
        'clear-day': "url('/assets/clear-day.jpg')",
        'clear-night': "url('/assets/clear-night.jpg')",
        'rain-day': "url('/assets/rain-day.jpg')",
        'rain-night': "url('/assets/rain-night.jpg')",
        'snow-day': "url('/assets/snow-day.jpg')",
        'snow-night': "url('/assets/snow-night.jpg')",
        'fog-day': "url('/assets/fog-day.jpg')",
        'fog-night': "url('/assets/cloud-night.jpg')",
      },
      fontFamily: {
        'intro': ['Waterfall', 'cursive'],
        'main': ['Rubik', 'Waterfall'],
      },
      zIndex: {
        'n99': '-99',
      },
      spacing: {
        '10px': '10px',
        '8px': '8px',
      },
    },
  },
  plugins: [],
}
