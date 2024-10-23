// 基础配置
export default {
  sourceMaps: true, // 生成sourceMap
  compact: false, // 输出的代码是否进行紧凑压缩
  minified: false, // 输出代码是否进行最小化压缩处理
  babelrc: false, // 不读取外部的配置文件
  assumptions: { noClassCalls: true },
  ignore: ["**/*.d.ts"], // 排除d.ts声明文件的编译
  presets: [
    ["@babel/preset-env", { modules: false }], // 允许使用最新的 JavaScript 特性 && 不用转化模块 保持es导入
    ["@babel/preset-typescript", { isTSX: true, allExtensions: true }], // 支持ts
  ],
  plugins: [
    ["@babel/plugin-proposal-export-default-from"], // 支持导出默认值
    ["@babel/plugin-proposal-decorators", { legacy: true }], // 支持 class 装饰器（没什么用吧 emm...）
  ],
};
