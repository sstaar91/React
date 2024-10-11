/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeDown: 'fadeDown 0.3s ease-in-out',
      },
      keyframes: {
        fadeDown: {
          '0%': { transform: 'translateY(-20%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
