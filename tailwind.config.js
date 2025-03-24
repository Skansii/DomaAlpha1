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
        white: "#ffffff",
        offwhite: "#fffffe",
        "light-gray": "#f6f6ee",
        beige: "#ded5cc",
        "gray-beige": "#f4f4ea",
        "warm-tone": "#e5ddd2",
        "neutral-tone": "#f4f4e8",
        "off-white-subtle": "#fefefe",
        "warm-gray": "#dad3c9",
        "warm-white": "#fffffd",
        primary: "#CC3333",    // DOMA red color
        "primary-hover": "#AA2222",
        "primary-light": "#FF9999",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}; 