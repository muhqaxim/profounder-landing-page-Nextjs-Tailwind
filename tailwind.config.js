/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        secondary: "#191919",
        border: "#262626",
        primaryBtn: "#004F82",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
       fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px 5px #262626', 
      },
    },
  },
  plugins: [],
};
