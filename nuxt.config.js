const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const resolve = (dir) => require('path').join(__dirname, dir)
const cookieParser = require('cookie-parser')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Brian Koech - Software Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Brian Koech is a Software Developer from Nairobi Kenya. He sometimes calls himself the Egoless Developer and abides by the principles of being and Egoless Developer. He loves coding in Javascript and JS Frameworks. i.e. NodeJs, Angular 2/4/5, VueJs, ReactJs and anything JS. He is a team player and passionate about leading teams.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },
  css: [
    '~/assets/style/app.styl',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],
  env: {
    CLOUD_FUNCTION_URL: process.env.CLOUD_FUNCTION_URL || 'http://localhost:5000/my-blog-c782c/us-central1/'
  },
  serverMiddleware: [
    cookieParser(),
    '~/serverMiddleware/validateFirebaseIdToken.js'
  ],
  plugins: [
    { src: '~/plugins/vuetify.js', ssr: true },
    { src: '~/plugins/firebase-client-init.js', ssr: false },
    { src: '~/plugins/vue-quill-plugin.js', ssr: false },
    { src: '~/plugins/auth-cookie.js', ssr: false }
  ],
  router: {
    middleware: 'auth'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    babel: {
      plugins: [
        [
          'transform-imports',
          {'vuetify': {
            'transform': 'vuetify/es5/components/${member}',
            'preventFullImport': true
          }}
        ]
      ]
    },
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,

    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }

      config.module.rules.forEach(rule => {
        if (rule.test.toString() === '/\\.styl(us)?$/') {
          rule.use.push({
            loader: 'vuetify-loader',
            options: {
              theme: resolve('./assets/style/theme.styl')
            }
          })
        }
      })
    },
    plugins: []
  }
}
