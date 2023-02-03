module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],

  daisyui: {
    styled: true,
    themes: [
      {
        lofi: {
          ...require('daisyui/src/colors/themes')['[data-theme=emerald]'],
          '--border-btn': '2px',
          '--btn-text-case': 'normal-case',
          '--rounded-box': 0,
          '--rounded-btn': 0,
          '--navbar-padding': 0,
        },
      },
    ],
  },
}