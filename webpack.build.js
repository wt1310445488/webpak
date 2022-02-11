/*
Author: What (1310445488@qq.com)
webpack.build.js (c) 2022
Desc: description
Created:  2022-02-11T05:54:14.971Z
Modified: 2022-02-11T05:56:41.424Z
*/

const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
});

