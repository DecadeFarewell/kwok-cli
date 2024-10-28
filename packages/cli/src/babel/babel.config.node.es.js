// 基础配置
export default {
  sourceMaps: true,
  targets: {
    browsers: "> 0.25%, not dead",
  },
  presets: [
    ["@babel/preset-env", { modules: false }], // modules 不用转化模块 保持es导入
  ],
};
