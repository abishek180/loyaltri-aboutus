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
        'custom-gradiant2':'linear-gradient(183deg, #876DFF 23.72%, #412F99 125.38%);',
        'custom-gradient3':'radial-gradient(75.97% 95.37% at 90% 10.37%, #16123E 0%, #000 100%), #000;',
        'custom-gradient4':'linear-gradient(304deg, #111 3.19%, #171717 99%)'

      },
    },
  },
  plugins: [],
};


