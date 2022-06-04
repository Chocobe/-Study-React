const spacing = Array.from(
  { length: 80 },
  (_, i) => `${i}px`
);

module.exports = {
  content: [
    "./src/**/*.{js,ts.jsx.tsx}",
  ],
  theme: {
    spacing,
    extend: {},
  },
  plugins: [],
}
