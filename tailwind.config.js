/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        surface: '#F5F5F5',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Pretendard', 'Apple SD Gothic Neo', 'sans-serif'],
      },
      borderRadius: {
        card: '1.25rem',
        button: '0.75rem',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.06)',
        'card-strong': '0 4px 20px rgba(0,0,0,0.12)',
      },
      borderColor: {
        primary: '#111111',
      },
    },
  },
  plugins: [],
}
