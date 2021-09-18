module.exports = {
  mode: "jit",
  purge: ["./public/*.html", "./src/*.jsx", "./src/*/**.jsx", "./src/*/*/**.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'nav': '#222221',
        'body': '#131417'
      }
    }
  },
  variants: {},
  plugins: [],
};
