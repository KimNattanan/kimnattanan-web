/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        serif: ['Noto Serif JP', 'serif'],
        marcellus: ['Marcellus', 'serif'],
        jost: ['Jost', 'serif'],
      },
      colors: {
        "col1-1": "var(--col1-1)",
        "col1-2": "var(--col1-2)",
        "col1-3": "var(--col1-3)",
        "col1-4": "var(--col1-4)",
        "col1-5": "var(--col1-5)",
        "col2-1": "var(--col2-1)",
        "col2-2": "var(--col2-2)",
        "col3-1": "var(--col3-1)",
        "col3-2": "var(--col3-2)",
        "col3-3": "var(--col3-3)",
        "col3-4": "var(--col3-4)",
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}

