module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Upewnij się że ścieżki są poprawne
  ],
  theme: {
    extend: {
       backgroundImage: {
        'short-blue-gradient': 'linear-gradient(to top left, #082f49 20%, #000 80%)',
      },
      colors: {
        'blue-contrast': {
          100: '#0F6D95',
        }
      },
    },
    plugins: [
          require('tailwindcss-animated')
    ]
  },
};
