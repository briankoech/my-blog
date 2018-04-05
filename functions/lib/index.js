"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const NUXT = require("nuxt-start");
// import * as NUXT from 'nuxt'
// const Nuxt = NUXT.Nuxt
const Nuxt = NUXT.Nuxt;
// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
const config = require('../nuxt.config.js');
// config.dev = false
const nuxt = new Nuxt(config);
exports.default = functions.https.onRequest(nuxt.render);
//# sourceMappingURL=index.js.map