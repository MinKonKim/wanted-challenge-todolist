/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {},
    screens: {
      sm: "456px",
      md: "768px",
      lg: "1024px",
      xl: "1640px",
    },
  },
  plugins: ["@tailwindcss/transition"],
};
