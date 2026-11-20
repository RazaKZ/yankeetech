module.exports = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Plus Jakarta Sans', 'sans-serif'],
        },
        colors: {
          brand: {
            50: '#f7f3ff',
            100: '#efe6ff',
            200: '#decfff',
            300: '#c4a6ff',
            400: '#a472ff',
            500: '#843dff',
            600: '#6e18f5',
            700: '#5b0cd4',
            800: '#490aa9',
            900: '#2d0669',
            950: '#13022c',
          }
        },
        boxShadow: {
          'soft': '0 10px 40px -10px rgba(91, 12, 212, 0.08)',
          'glow': '0 12px 32px -6px rgba(110, 24, 245, 0.45)',
          'card': '0 4px 24px rgba(17, 12, 34, 0.05)',
        }
      }
    }
  };
module.exports.content = ["./pages/**/*.{js,jsx}", "./public/*.js", "./components/**/*.{js,jsx}"];
