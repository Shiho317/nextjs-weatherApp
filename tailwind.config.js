module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '55': '-50%'
      },
      backgroundImage: {
        'top-image': "url('../images/home-img.jpg')",
      },
    },
  },
  plugins: [],
}
