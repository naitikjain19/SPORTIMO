module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        color0:"var(--color0)",
        color1:"var(--color1)",
        color2:"var(--color2)",
        color3:"var(--color3)",
        color4:"var(--color4)",
        color5:"var(--color5)",
        color6:"var(--color6)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
