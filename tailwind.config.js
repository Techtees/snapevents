const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors:{
      primary:{
        purple_dark:'#240D57',
        purple_light:'#240D57',
        evited_purple:'#8456EC',
        Evited_pink:'#E87BF8',
      },

     secondary:{
      purple_1:'#4F4F4F',
      purple_2:'#E61445',
      purple_3:'#F6F2FF',
     },

     alert:{
      pink: '#FFD7E0',
      red: '#E61445',
      light_green: '#D3FFE2',
      dark_green: '#00805E'
     },

     general:{
      grey_dark:'#4F4F4F',
      grey_light_300:'#828282',
      grey_light_500:'#BDBDBD',
      grey_light_200:'#E0E0E0',
      grey_light_100:'#E0E0E0',
      smoke_white:'#BDBDBD'
     },
    },
    extend: {},
  },
  plugins: [],
}
