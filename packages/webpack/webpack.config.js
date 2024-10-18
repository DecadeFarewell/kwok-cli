const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  entry: ["webpack-hot-middleware/client?noInfo=true&reload=true", "./src/index.js"],
  devtool: "inline-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    // 提取css为单独文件
    new MiniCssExtractPlugin({
      ignoreOrder: true,
    }),

    new HtmlWebpackPlugin({
      title: "kwok's webpack-cli",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    // manifest
    new WebpackManifestPlugin({
      fileName: "manifest.json", // 生成的 manifest 文件名称
      publicPath: "/dist/", // 静态资源的公共路径
    }),
    // 启用热更新
  ],
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 处理 .js 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: {
          loader: "babel-loader", // 使用 babel-loader
          options: {
            presets: [
              ["@babel/preset-env"],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
