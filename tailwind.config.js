/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },

    screens: {
       'sm': {'min':'0px', 'max': '639px'},
       'md': {'min':'640px','max': '768px'},
       'lg': {'min':'769px','max': '1100px'},
        'xl': {'min':'1101px','max': '2000px'}
    },
    extend: {
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",

      },
    },
  },
  plugins: [],
}
