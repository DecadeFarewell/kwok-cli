module.exports = {
  optimization: {
    // 是否启用代码压缩，压缩会删除已经标记过的无用代码，使用的是webpack(v5)自带的 terser-webpack-plugin 插件
    minimize: process.env.NODE_ENV !== "development", // note:开发环境下没有压缩的必要
    usedExports: process.env.NODE_ENV !== "development", // 启用或禁用tree shaking
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
