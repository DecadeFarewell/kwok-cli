import path from 'path'
import webpack from "webpack";
import cliProgress from 'cli-progress';
import { cwdPath, outputPath } from "@kwok/utils";

const cliProgressBar = new cliProgress.Bar(
  {
    // clearOnComplete: true,
    stopOnComplete: true,
    linewrap: true,
    hideCursor: true,
  },
  {
    format:
      "@kwok webpack progress [{bar}] {percentage}% | ETA: {eta}s | {text}",
    barCompleteChar: "=",
    barIncompleteChar: "-",
  }
);
function handler(percentage, ...args) {
  if (!cliProgressBar.isActive) {
    cliProgressBar.start(1, 0);
  }
  cliProgressBar.update(percentage, { text: args.join(" ") });
}

export default {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  context: cwdPath,
  context: process.cwd(),
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: outputPath,
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
