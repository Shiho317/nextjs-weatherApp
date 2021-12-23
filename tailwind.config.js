module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/hero.js",
    "./Components/hero-intro.js",
    "./Components/current.js",
    "./Components/hourlyweather.js",
    "./Components/searchBox.js",
    "./Components/weeklyWeather.js",
  ],
  theme: {
    extend: {
      translate: {
        '55': '-50%'
      },
      backgroundImage: {
        'top-image': "url('../public/assets/home-img.jpg')",
      },
      fontFamily: {
        'intro': ['Waterfall', 'cursive'],
        'main': ['Rubik', 'Waterfall'],
      },
    },
  },
  plugins: [],
}
