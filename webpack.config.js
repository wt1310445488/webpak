/*
Author: What (1310445488@qq.com)
webpack.config.js (c) 2022
Desc: description
Created:  2022-02-10T09:20:00.354Z
Modified: 2022-02-11T05:42:53.670Z
*/

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js', // 打包文件的入口，webpack将从这个文件开始分析整个项目的依赖结构
  output: {
    filename: 'main.js', // 输出的文件名称
    path: path.resolve(__dirname, 'dist'), // 输出的文件夹
  },
  target: "web",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // contentBase: path.resolve(__dirname, "dist"),
    static : {
      directory : path.join(__dirname, "dist")
    },
    hot: "only",
    compress: true,
    port: 3002,
  },

  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./index.html"),  // ./index.html是作为模板生成dist/index.html
    }),
  ],

};