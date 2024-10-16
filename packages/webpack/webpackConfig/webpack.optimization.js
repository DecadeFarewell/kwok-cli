module.exports = {
  optimization: {
    minimize: false, // 是否启用代码压缩, 开发环境的代码压缩没有意义
    runtimeChunk: "single", // 将运行时代码提取到单独的
    moduleIds: 'deterministic', // 一种选择模块id的算法，看不懂,主打听劝 emm....
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
