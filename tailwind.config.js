/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["var(--font-barlow)", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('/path-to-your-image.jpg')",
        'custom-gradient': "linear-gradient(to right, #4facfe, #00f2fe)",
      },
    },
  },
  plugins: [],
};
