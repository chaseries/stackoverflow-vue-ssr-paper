const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const serverConfig = require("./webpack.server.config.js");
const clientConfig = require("./webpack.client.config.js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";


const baseConfig = {
  devtool: isProduction ? false : "source-map",
  resolve: {
    alias: {
      "public": path.resolve(__dirname, "../public"),
      "SRC": path.resolve(__dirname, "../src"),
      "SASS": path.resolve(__dirname, "../src/sass"),
      "VUE_COMPONENT": path.resolve(__dirname, "../src/component"),
      "VUE_PAGE": path.resolve(__dirname, "../src/page")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: isProduction ? 
    [
      new UglifyJsPlugin()
    ] :
    [
      new FriendlyErrorsPlugin()
    ]
};

module.exports = [
  webpackMerge(baseConfig, serverConfig),
  webpackMerge(baseConfig, clientConfig)
];
