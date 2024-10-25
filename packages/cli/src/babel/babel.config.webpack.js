// 基础配置
export default {
  sourceMaps: true, // 生成sourceMap
  targets: {
    browsers: "> 0.01%, not dead",
  },
  presets: [
    ["@babel/preset-env", { modules: false }], // 允许使用最新的 JavaScript 特性 && 不对模块语法进行转换保留原始的模块语法(可以更大程度配合配合tree-shaking)
  ],
  plugins: [
    ["@babel/plugin-proposal-export-default-from"], // 支持导出默认值
  ],
};
