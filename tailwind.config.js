module.exports = {
  mode: "jit",
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/hero.js",
    "./Components/hero-intro.js",
    "./Components/current.js",
    "./Components/hourlyweather.js",
    "./Components/searchBox.js",
    "./Components/search.js",
    "./Components/SearchIcon.js",
    "./Components/weeklyWeather.js",
    "./Components/cityName.js",
  ],
  theme: {
    extend: {
      translate: {
        '55': '-50%'
      },
      backgroundImage: {
        'top-image': "url('../public/assets/home-img.jpg')",
        'cloud-day': "url('../public/assets/cloud-day.jpg')",
        'cloud-night': "url('../public/assets/cloud-night.jpg')",
        'clear-day': "url('../public/assets/clear-day.jpg')",
        'clear-night': "url('../public/assets/clear-night.jpg')",
        'rain-day': "url('../public/assets/rain-day.jpg')",
        'rain-night': "url('../public/assets/rain-night.jpg')",
        'snow-day': "url('../public/assets/snow-day.jpg')",
        'snow-night': "url('../public/assets/snow-night.jpg')",
        'fog-day': "url('../public/assets/fog-day.jpg')",
        'fog-night': "url('../public/assets/cloud-night.jpg')",
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
