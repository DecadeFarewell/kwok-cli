const path = require("path");

module.exports = {
  output: {
    clean: true,
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
};
