/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0ea5e9",
        "success": "#10b981",
        "fail": "#ef4444",
        "alert": "#fde047",
        "primary-dark": "#0369a1",
        "success-dark": "#047857",
        "fail-dark": "#b91c1c",
        "alert-dark": "#ca8a04"
      },
    },
  },
  plugins: [],
}
