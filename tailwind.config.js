/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          Green: "hsl(75, 94%, 57%)",
        },
        neutral: {
          White: 'hsl(0, 0%, 100%)',
          Grey: 'hsl(0, 0%, 20%)',
          DarkGrey: 'hsl(0, 0%, 12%)',
          OffBlack: 'hsl(0, 0%, 8%)'
        },
      },
    },
  },
plugins: [],
}

