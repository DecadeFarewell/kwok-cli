import webpack from 'webpack'
import { babelOptionWebpackDev } from '../babel'

module.exports = {
  entry: ["webpack-hot-middleware/client?reload=true"],

  // https://webpack.docschina.org/configuration/devtool/
  // devtool内部使用webpack.SourceMapDevToolPlugin插件
  devtool: "eval",

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts|mjs|cjs|jsx|tsx)$/,
        exclude: /node_modules/, // 开发环境，排除node_modules编译，提高速度; 正式不排除node_modules，有些库语法不合规
        use: [
          {
            loader: "babel-loader",
            options: babelOptionWebpackDev(),
          },
        ],
      },
    ],
  },
};
