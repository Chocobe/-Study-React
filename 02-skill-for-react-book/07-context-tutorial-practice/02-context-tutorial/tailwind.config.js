const spacing = Array.from(
  { length: 101 },
  (_, i) => `${i}px`
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    spacing,
    extend: {},
  },
  plugins: [],
};