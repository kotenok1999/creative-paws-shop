/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      animation: {
        marquee: 'marquee 35s linear infinite',
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
            '0%': {
              opacity: '0',
              transform: 'translateY(20px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
            },
          },
      },
 animation: {
        
        marquee: 'marquee 35s linear infinite', 
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },




      colors:{
      'jacarta': '#3F2A52',
      'darkbluegray': '#75619D',
      'wisteria': '#BEAED8',
      'wisterialight': '#dcd3eb',
      'brightgray': '#E6EFF7',
      'blackcoffee': '#3A2D34',
      'osnblack': '#242021',

      'pinklavand': '#DFBBCA',
      '': '#',
      '': '#',



      'fon': '#BC8F8F',
      'light': '#FFF8DC',
      'pink': '#FF1493'
      },


      fontFamily: {
        'CompactaBlack': ['CompactaBlack'],
        'Bellota': ['Bellota'],
        'Benzin': ['Benzin'],
      },
      
    },
  },
  plugins: [],
}