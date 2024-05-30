/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#FF5E16",
        "primary-hover": "#DE4A08",
      },
    },
  },
  plugins: [],
};
