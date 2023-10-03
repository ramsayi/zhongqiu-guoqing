/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { // 字体
        douYu: ['douYuZhuiGuangTi', 'sans-serif'],
        xingYue: ['xingYueXingShu', 'sans-serif'],
      }
    }
  },
  plugins: [require('daisyui')]
}
