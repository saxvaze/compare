/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      width: {
        '140': '140px'
      },
      minHeight: {
        '42px': '42px',
      },
      height: {
        '42': '42px'
      }
    }
  },
  plugins: [],
}

