/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}',
    './dist/**/*.js'],

  theme: {

    fontFamily: {

      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      libre: ["Libre Baskerville", "serif"]

    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

    },

    colors: {
      blue: {
        '50': '#ecfbff',
        '100': '#cff5fe',
        '200': '#a5ebfc',
        '300': '#67ddf9',
        '400': '#38c2f2',

      },
      transparent: {
        'black': '#00000000',


      },
      slate: {
        '300': '#cbd5e1',
        '400': '#94a3b8',
        '500': '#64748b',
        '600': '#475569',
        '700': '#334155',
        '800': '#1e293b',
        '900': '#0f172a',

      },
      stone: {
        '100': '#fafafa',
        '200': '#f5f5f5',
        '300': '#e5e5e5',
        '400': '#d4d4d4',
        '500': "#c0c0c0",
        '600': "#adadad"

      },
      fontSize: {
        'sm': '0.8rem',
        'base': '1rem',
        'xl': '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem'
      },
      spacing: {
        '0.5': '3px',
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },

      extend: {

      },
    },
    plugins: [
    ],
  }
}
