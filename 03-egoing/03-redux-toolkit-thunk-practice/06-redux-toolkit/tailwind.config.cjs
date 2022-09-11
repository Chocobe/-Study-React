const spacing = Array.from (
  { length: 101 },
  (_, i) => `${i}px`
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*",
  ],
  theme: {
    spacing,
    extend: {},
  },
  plugins: [],
};
