import webpack from "webpack";

// 编译缓存配置
export default {
  entry: [
    "core-js", // 旧版浏览器中实现现代 JavaScript 特性
    "@babel/runtime/regenerator", // 使用 Babel 转译包含生成器函数（generator）的代码时，确保生成器函数在目标环境中能够正确运行。
    "normalize.css" // 重置css样式
  ],
  plugins: [
    // 注入常量
    new webpack.DefinePlugin({
      LOVER: 'YLL'
    }),
  ],
};
