import webpack from 'webpack'
import { babelOptionWebpackProd } from '../babel'

module.exports = {

  plugins: [
    // 对 source map 生成内容进行更细粒度的控制
    new webpack.SourceMapDevToolPlugin({
      append: false, // 不在原始资源文件后追加 #sourceMappingURL 标识
      filename: "[file].map",
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 10000, // 单位： bytes，合并小的js，每个chunk的最小应为10KB，减少网络请求
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts|mjs|cjs|jsx|tsx)$/,
        exclude: /core-js/,
        use: [
          {
            loader: "babel-loader",
            options: babelOptionWebpackProd(),
          },
        ],
      },
    ],
  },
};
