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
        "shadow-into-ligth": ["Shadows Into Light"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          100: "#dad8e1",
          200: "#b5b1c2",
          300: "#8f8aa4",
          400: "#6a6385",
          500: "#453c67",
          600: "#373052",
          700: "#29243e",
          800: "#1c1829",
          900: "#0e0c15",
        },
        secondary: {
          100: "#e2e1fa",
          200: "#c5c2f4",
          300: "#a7a4ef",
          400: "#8a85e9",
          500: "#6d67e4",
          600: "#5752b6",
          700: "#413e89",
          800: "#2c295b",
          900: "#16152e",
        },
        tertiary: {
          100: "#daf3f5",
          200: "#b5e7ea",
          300: "#90dae0",
          400: "#6bced5",
          500: "#46c2cb",
          600: "#389ba2",
          700: "#2a747a",
          800: "#1c4e51",
          900: "#0e2729",
        },
        quaternary: {
          100: "#fcfdec",
          200: "#fafcd9",
          300: "#f7fac7",
          400: "#f5f9b4",
          500: "#f2f7a1",
          600: "#c2c681",
          700: "#919461",
          800: "#616340",
          900: "#303120",
        },
      },
    },
  },
  plugins: [],
};
