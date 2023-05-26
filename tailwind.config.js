/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1d0cb5",
        
"secondary": "#e05118",
        
"accent": "#dfbdf9",
        
"neutral": "#19272E",
        
"base-100": "#fff",
        
"info": "#1774EE",
        
"success": "#4CE6B0",
        
"warning": "#EAB806",
        
"error": "#EB1418",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

