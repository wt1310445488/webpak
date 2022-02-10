/*
Author: What (1310445488@qq.com)
postcss.config.js (c) 2022
Desc: description
Created:  2022-02-10T10:22:58.460Z
Modified: 2022-02-10T10:52:20.579Z
*/

module.exports = {
  plugins: [
    //自动添加前缀 
    require("autoprefixer"),

    //优化合并css    
    require("cssnano"),
  ],
};
