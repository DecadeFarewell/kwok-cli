import webpack from "webpack";
import cliProgress from 'cli-progress';
import { cwdPath } from "@kwok/utils";

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
  entry: './src/client/index.js',
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
    // 忽略第三方包指定目录，让这些目录不要被打包进去。
    // 打包时忽略momemt这个包中xxx/locale/ 目录下的所有内容
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    // 进度
    new webpack.ProgressPlugin(handler),
  ],
};
