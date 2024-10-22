const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { default: loader } = require("vue-loader");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/, // 处理 .js 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: {
          loader: "babel-loader", // 使用 babel-loader
          options: {
            presets: [["@babel/preset-env"]],
          },
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
