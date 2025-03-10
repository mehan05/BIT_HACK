/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        josefinSans: ["'Josefin Sans'"],
        Fascinate:["'Fascinate Inline'"]
     }
    },
  },
  plugins: [],
}