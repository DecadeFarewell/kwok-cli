module.exports = {
  optimization: {
    runtimeChunk: "single", // 将运行时代码提取到单独的
    splitChunks: {
      chunks: "all",
    },
  },
};
