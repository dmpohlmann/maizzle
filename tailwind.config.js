/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('tailwindcss-preset-email'),
  ],
  content: [
    './components/**/*.html',
    './emails/**/*.html',
    './layouts/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        nmq: {
          'logo': 'oklch(0.3847 0.0292 174.38)',
        },
        nmqgreen: {
        '00': 'oklch(0.5734 0.0365 162.89)',
        '01': 'oklch(0.6502 0.0428 161.78)',
        '02': 'oklch(0.7551 0.0303 164.5)',
        '03': 'oklch(0.8337 0.0212 165.2)',
        '04': 'oklch(0.9038 0.0121 166.94)',
        '05': 'oklch(0.9735 0.0059 179.51)',
        },
        nmqpink: {
        '00': 'oklch(0.7441 0.1289 20.96)',
        '01': 'oklch(0.7772 0.1085 17.13)',
        '02': 'oklch(0.8255 0.0711 16.32)',
        '03': 'oklch(0.8663 0.0462 15.8)',
        '04': 'oklch(0.908 0.0306 14.31)',
        '05': 'oklch(0.9831 0.003 359.51)',
        },
        nmqgrey: {
        '00': 'oklch(0.3794 0.0026 269.01)',
        '01': 'oklch(0.6122 0.0026 269.14)',
        },
      },
    },
  },
}
