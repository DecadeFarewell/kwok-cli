module.exports = {
  cache: {
    // string: 'memory' | 'filesystem'
    // 配置哪种类型取决于项目规模，memory对于·规模小的项目·或者在·开发阶段·有优势
    type: "filesystem",
    buildDependencies: {
      // 当Webpack 配置文件发生变化时，使缓存会失效，Webpack重新构建
      config: [__filename],
    },
  },
};
