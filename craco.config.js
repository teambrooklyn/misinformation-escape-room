/* craco.config.js */
const path = require(`path`);
const webpack = require('webpack');
const DEV_URL = "https://api.lokisloop.org/v1";
const PROD_URL = "https://api.lokisloop.org/v1";
const apiUrl = process.env.NODE_ENV === "development" ? DEV_URL : PROD_URL;

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.REACT_APP_API_URL": JSON.stringify(apiUrl),
      }),
    ],
  },
};
