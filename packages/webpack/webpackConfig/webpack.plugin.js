const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    // 提取css为单独文件
    new MiniCssExtractPlugin({
      ignoreOrder: true,
    }),

    new HtmlWebpackPlugin({
      title: "kwok's webpack-cli",
      template: path.resolve(__dirname, "../views/index.html"),
    }),

    // manifest
    new WebpackManifestPlugin({
      fileName: "manifest.json", // 生成的 manifest 文件名称
      publicPath: "/dist/", // 静态资源的公共路径
    }),
    // 启用热更新
  ],
}