/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-image': "url('../public/background.jpg')",
      })
    },
  },
  plugins: [],
}

