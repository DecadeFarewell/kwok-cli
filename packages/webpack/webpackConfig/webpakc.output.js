const path = require("path");

module.exports = {
  output: {
    clean: true,
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    pathinfo: true // 输出的bundle中不显示原文件的路径信息
  },
};
