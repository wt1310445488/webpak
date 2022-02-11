/*
Author: What (1310445488@qq.com)
webpack.common.js (c) 2022
Desc: description
Created:  2022-02-11T05:53:54.324Z
Modified: 2022-02-11T06:04:27.795Z
*/

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // 打包文件的入口，webpack将从这个文件开始分析整个项目的依赖结构
  output: {
    filename: "main.js", // 输出的文件名称
    path: path.resolve(__dirname, "dist"), // 输出的文件夹
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./index.html"), // ./index.html是作为模板生成dist/index.html
    }),
  ],
};

