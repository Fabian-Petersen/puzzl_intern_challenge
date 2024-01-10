/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      darkMode: "class",
      fontSize: {
        "heading-clamp": "clamp(1rem, 3vw + 1rem, 2rem)",
      },
      colors: {
        bgContainerDark: "#050f1a",
        bgContainer: "#eff5f5",
        textLight: "#1d2b53",
        facebookGray: "#eff2f5",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: ["flowbite/plugin"],
};
