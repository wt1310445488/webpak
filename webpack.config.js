/*
Author: What (1310445488@qq.com)
webpack.config.js (c) 2022
Desc: description
Created:  2022-02-10T09:20:00.354Z
Modified: 2022-02-10T10:46:30.290Z
*/

const path = require('path');

module.exports = {
  entry: './src/index.js', // 打包文件的入口，webpack将从这个文件开始分析整个项目的依赖结构
  output: {
    filename: 'main.js', // 输出的文件名称
    path: path.resolve(__dirname, 'dist'), // 输出的文件夹
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
};