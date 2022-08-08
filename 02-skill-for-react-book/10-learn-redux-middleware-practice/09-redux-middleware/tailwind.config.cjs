const spacing = Array.from(
  { length: 101 },
  (_, i) => `${i}px`
);

const colors = {
  "custom-gray-01": "#BDBDBD",
  "custom-gray-02": "#7E7E7E",
  "custom-gray-03": "#2E2B2B",

  "custom-blue-01": "#2665AE",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    spacing,
    extend: {
      colors,
    },
  },
  plugins: [],
};
