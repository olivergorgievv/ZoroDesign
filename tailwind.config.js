import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#F03D5F",
        "primary-hover": "#BA2C42",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
