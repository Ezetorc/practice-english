/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        ts: '320px'
      },
      colors: {
        tekhelet: '#3D348B',
        'medium-slate-blue': '#7678ED',
        'selective-yellow': '#F7B801',
        tangerine: '#F18701',
        persimmon: '#F35B04',
        affirmative: '#caf7b2',
        negative: '#ffb8b8',
        interrogative: '#b8d1ff'
      },
      fontFamily: {
        'roboto-bold': 'roboto-bold',
        'roboto-regular': 'roboto-regular'
      },
      animation: {
        enter: 'enter 0.4s forwards',
        leave: 'leave 0.4s forwards'
      },
      keyframes: {
        enter: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        leave: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        }
      },
      boxShadow: {
        bottom: '0px 6px 15px #0005'
      }
    }
  },
  plugins: []
}
