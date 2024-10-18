module.exports = {
  optimization: {
    runtimeChunk: "single", // 将运行时代码提取到单独的
    splitChunks: {
      chunks: "all",
      // 将第三方库提取到单独的 vendor chunk 中
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
