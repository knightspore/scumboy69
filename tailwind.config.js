module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
            'assets/**/*.svg',
        ]
    },
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'system-ui']
      },
      colors :{
        'lightpink': '#FFC4EB',
        'gold': '#FBD735',
        'lightblue': '#2B9EB3',
        'orangered': '#E74723',
        'maroon': '#601A1A',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  variants: {},
  plugins: [],
}
