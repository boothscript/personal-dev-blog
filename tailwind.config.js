module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.+(js|jsx)', './pages/**/*.+(js|jsx)'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: '#F3F4F6',
            },
            h2: {
              color: '#F3F4F6',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
