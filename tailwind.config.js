module.exports = {
  mode: "jit",
  content: [
    "./pages/location/[city].js",
    "./pages/Components/search.js",
    "./pages/Components/weeklyWeather.js",
    "./pages/Components/current.js",
    "./pages/Components/hero.js",
    "./pages/Components/hourlyweather.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
