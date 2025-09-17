/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e11d48', // rose-600
        secondary: '#334155', // slate-700
        background: '#fdf6f8', // light rose/neutral
      },
    },
  },
  plugins: [],
};

export default config;
