/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(22, 18, 62, 1), rgba(0, 0, 0, 1))',
        'custom-gradiant2':'linear-gradient(183deg, #876DFF 23.72%, #412F99 125.38%);'

      },
    },
  },
  plugins: [],
};
