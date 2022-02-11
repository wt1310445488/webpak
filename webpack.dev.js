/*
Author: What (1310445488@qq.com)
webpack.dev.js (c) 2022
Desc: description
Created:  2022-02-11T05:54:05.529Z
Modified: 2022-02-11T05:59:06.776Z
*/

const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge(common, {
  target: "web",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // contentBase: path.resolve(__dirname, "dist"),
    static : {
      directory : path.join(__dirname, "dist")
    },
    open: true,  
    hot: "only",
    compress: true,
    port: 3002,
  },
});

