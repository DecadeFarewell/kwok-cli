const webpack = require("webpack");
const path = require("path");
const cliProgress = require("cli-progress");

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
  mode: "development",
  // mode: "production",

  // https://webpack.docschina.org/guides/build-performance/#devtool
  // devtool: "eval-cheap-module-source-map",

  // 如果开启treeShaking,devtool不支持eval-cheap-module-source-map选项
  // // https://webpack.docschina.org/plugins/terser-webpack-plugin/#note-about-source-maps
  devtool: "source-map",

  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
    // 尝试按顺序解析这些扩展。如果多个文件共享相同的名称但具有不同的扩展名，webpack 将解析扩展名在数组中列在第一位的文件并跳过其余部分。
    extensions: [
      ".js",
      ".ts",
      ".mjs",
      ".cjs",
      ".tsx",
      ".jsx",
      ".json",
      ".wasm",
      ".vue",
    ],
  },

  plugins: [
    // 进度
    new webpack.ProgressPlugin(handler),
  ],
};
