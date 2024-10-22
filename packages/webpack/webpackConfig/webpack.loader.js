const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts|mjs|cjs|jsx|tsx)$/,
        // exclude: /node_modules/, // 排除 node_modules 目录
        exclude: /core-js/,
        use: {
          loader: "babel-loader", // 使用 babel-loader
          options: {
            babelrc: false,
            presets: [
              // 允许使用最新的 JavaScript 特性 && 不将 ES6 模块转换为 CommonJS
              ["@babel/preset-env"],
              // typescript
              [
                "@babel/preset-typescript",
                { isTSX: true, allExtensions: true },
              ],
            ],
          },
        },
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
  }
};
