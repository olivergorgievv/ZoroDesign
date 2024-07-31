import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        nav: "900px",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        slowMarquee: "slowMarquee 60s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        slowMarquee: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      colors: {
        "primary-red": "#F03D5F",
        "primary-hover": "#BA2C42",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
