/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-Mont)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        dark: "#050816",
        light: "#f5f5f5",
        primaryLight: "#F1F3F4" ,
        primary: "#aaa6c3", // 240,86,199
        primaryDark: "#151030", // 80,230,217
    },
    },
  },
  plugins: [],
}
