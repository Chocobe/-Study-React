const spacing = Array.from(
  { length: 101 },
  (_, i) => `${i}px`
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    spacing,
    extend: {},
  },
  plugins: [],
}
