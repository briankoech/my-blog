import * as functions from 'firebase-functions'
import * as NUXT from 'nuxt-start'
// import * as NUXT from 'nuxt'
// const Nuxt = NUXT.Nuxt
const Nuxt = NUXT.Nuxt
// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
const config = require('../nuxt.config.js')
// config.dev = false
const nuxt = new Nuxt(config)
export default functions.https.onRequest(nuxt.render)
