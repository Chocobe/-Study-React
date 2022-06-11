const spacing = Array.from(
  { length: 100 },
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
}
