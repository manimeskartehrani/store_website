/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/app.html",
  "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-background": "#0F161E"
      },
      screens: {
        'md': { 'min': '20px','max': '959px'},
  
        'lg': {'min': '960px', 'max': '975px'},

        'xl': {'min': '976px', 'max': '1032px'},

        '2xl': {'min': '1033px', 'max': '1089px'},
        
        '3xl': {'min': '1090px'},
      },
    },
  },
  plugins: [
  require("@tailwindcss/typography")
  ],
}