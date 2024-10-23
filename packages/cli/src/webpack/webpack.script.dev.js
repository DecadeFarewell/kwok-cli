import { babelOptionWebpack } from '../babel'

module.exports = {
  entry: ["webpack-hot-middleware/client?reload=true"],

  devtool: "source-map",

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts|mjs|cjs|jsx|tsx)$/,
        exclude: /node_modules/, // 开发环境，排除node_modules编译，提高速度，正式环境需要，有些库语法不合规
        use: [
          {
            loader: "babel-loader",
            options: babelOptionWebpack(),
          },
        ],
      },
    ],
  },
};
