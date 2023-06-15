/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'primarycolor': '#FF4601',
        'secondary color': '#1E1E1E',
        'whitecolor': 'rgba(255, 255, 255, 0.8);',
        'orange-400': '#FF4300',
        'orange-500': '#FF6400',
        'blackcolor': '#18171A',
        'bgblack':'#1E1E1E',

      },

      fontFamily: {
        'Outfit': ['Outfit'],
        'Orbitron': ['Orbitron'],
      },

      backgroundImage: {
        'hero': "url('/Images/hero-bg-image.jpg')",
        'GradientColor': 'linear-gradient(90deg, #FF4300 -6.33%, #FF6400 103.92%)',
        'classes':"url('/Images/classes-bg-img.jpg')" ,
        'footer': "url('/Images/footer-bg-img.jpg')" ,
      },

      
    },
  },
  plugins: [],
}

