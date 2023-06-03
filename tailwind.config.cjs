/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      nunito: 'Nunito Sans, sans-serif',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "40px"
        }
      },
      colors: {
        dark: "#29384E",
        slateGrey: "#546071",
        hosterBlue: "#007AFF",
        darkBlue: "#0057B2",
        darkestBlue: "#22273C",
        lightBlue: "#E0EFFF",
        hosterYellow: "#FF9800",
        grey: "#A9AFB8",
        inputOutline: "#D6DADE",
        paginationOutline: "#D9DDE3",
      },
      backgroundImage: {
        gradientBlue: 'linear-gradient(249.77deg, #0094FF -1.99%, #007DFF 43.52%, #026CE8 95.86%)',
        icSearch: 'url("/assets/svg/ic-search.svg")',
        icSearchFocus: 'url("/assets/svg/ic-search-dark.svg")',
        icSearchDisabled: 'url("/assets/svg/ic-search-disabled.svg")',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
