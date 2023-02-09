/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        zilla: ["Zilla Slab Highlight"],
        aboreto: "Aboreto",
        "roboto-mono": ["Roboto Mono"],
        "dancing-script": ["Dancing Script"],
      },
    },
  },
  plugins: [],
};
