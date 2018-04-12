const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const resolve = (dir) => require('path').join(__dirname, dir)
const cookieParser = require('cookie-parser')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Brian Koech',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Recordings of everyday work' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.min.css'
      },
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
  serverMiddleware: [
    cookieParser(),
    '~/serverMiddleware/validateFirebaseIdToken.js'
  ],
  plugins: [
    '~/plugins/vuetify.js',
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
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery'
      })
    ]
  }
}
