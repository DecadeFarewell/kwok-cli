import path from 'path'
import webpack from "webpack";
// import { cwdPath, outputPath } from "@kwok/utils";

const handler = (percentage, message, ...args) => {
  // e.g. Output each progress message directly to the console:
  console.info(percentage);
};


export default {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  // context: cwdPath,
  context: process.cwd(),
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: '/dist',
    clean: true, // 每次构建前清空 output.path 指定的文件夹内容
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    // 进度
    new webpack.ProgressPlugin(handler),
  ],
};