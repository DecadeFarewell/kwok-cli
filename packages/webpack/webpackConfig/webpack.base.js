const webpack = require("webpack");
const cliProgress = require('cli-progress')

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

module.exports = {
  // mode: "development",
  mode: "production",

  // https://webpack.docschina.org/guides/build-performance/#devtool
  // devtool: "eval-cheap-module-source-map",

  // 如果开启treeShaking,devtool不支持eval-cheap-module-source-map选项
  // // https://webpack.docschina.org/plugins/terser-webpack-plugin/#note-about-source-maps
  devtool: 'source-map', 

  plugins: [
    // 进度
    new webpack.ProgressPlugin(handler),
  ],
};
