/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        eccomOrange:"#FF7224",
        eccomBlue:"#003D96",
        eccomBlack: "#212020",
        eccomGray:"#373737",
        eccomOutline:"#CBE0FF",
        eccomIcon:"#F2D0BD",
        eccomOutlineBackground:"#FFD3BA",


        
      }
    },
  },
  plugins: [],
}