/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm_sm: '360px',
      sm_md: '375px',
      sm: '480px',
      pl: '760px',
      md: '960px',
      slg: '1280px',
      lg: '1440px',
      xl: '1900px',
      xl_l: '2000px',
      xxl: '2300px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'mWhite': '#ffffff',
      'mBlack': '#0b1117',
      'mRed': '#D11011',
      'mGray': '#ababab',
      '2Gray': '#9DA0A2',
      '2Black': '#101922',
      '3Black':'#252F38'
    },
    extend: {},
  },
  plugins: [],
}