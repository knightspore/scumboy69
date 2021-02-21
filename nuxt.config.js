export default {
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s | Scumboy Online',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href:'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' }
    ]
  },

  plugins: [
    '~/plugins/animxyz.js',
    { src: '~/plugins/vuex-persist', ssr: false },
  ],

  loading: {
    color: 'rgb(231, 71, 35)',
    height: '.6rem',
    continuous: true,
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
  ],

  optimizedImages: {
    optimizeImages: true,
    mozjpeg: {
      quality: 80
    },
  },

  modules: [
    '@nuxt/content',
    'nuxt-shopify',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://www.scumboy.co.za',
    exclude: [
      'admin/**'
    ],
  },

  shopify: {
    domain: 'shop-scum-boy.myshopify.com',
    storefrontAccessToken: 'a0089bb74646a585bb231a5601d600b9',
  }
}

