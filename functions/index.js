const functions = require("firebase-functions");
const express = require("express");
const { Nuxt } = require("nuxt");

const app = express();
const config = {
  dev: false,
  buildDir: "nuxt",
  build: {
    publicPath: "/public/",
  },
};
const nuxt = new Nuxt(config);

app.use(nuxt.render);

exports.nuxtApp = functions.https.onRequest(app);
