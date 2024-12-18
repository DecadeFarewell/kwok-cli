"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _webpack = _interopRequireDefault(require("webpack"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// 编译缓存配置
var _default = exports.default = {
  entry: ["core-js",
  // 旧版浏览器中实现现代 JavaScript 特性
  "@babel/runtime/regenerator",
  // 使用 Babel 转译包含生成器函数（generator）的代码时，确保生成器函数在目标环境中能够正确运行。
  "normalize.css" // 重置css样式
  ],
  plugins: [
  // 注入常量
  new _webpack.default.DefinePlugin({
    LOVER: 'YLL'
  })]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfd2VicGFjayIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiZW50cnkiLCJwbHVnaW5zIiwid2VicGFjayIsIkRlZmluZVBsdWdpbiIsIkxPVkVSIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYnBhY2svd2VicGFjay5wb2x5ZmlsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VicGFjayBmcm9tIFwid2VicGFja1wiO1xuXG4vLyDnvJbor5HnvJPlrZjphY3nva5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZW50cnk6IFtcbiAgICBcImNvcmUtanNcIiwgLy8g5pen54mI5rWP6KeI5Zmo5Lit5a6e546w546w5LujIEphdmFTY3JpcHQg54m55oCnXG4gICAgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiLCAvLyDkvb/nlKggQmFiZWwg6L2s6K+R5YyF5ZCr55Sf5oiQ5Zmo5Ye95pWw77yIZ2VuZXJhdG9y77yJ55qE5Luj56CB5pe277yM56Gu5L+d55Sf5oiQ5Zmo5Ye95pWw5Zyo55uu5qCH546v5aKD5Lit6IO95aSf5q2j56Gu6L+Q6KGM44CCXG4gICAgXCJub3JtYWxpemUuY3NzXCIgLy8g6YeN572uY3Nz5qC35byPXG4gIF0sXG4gIHBsdWdpbnM6IFtcbiAgICAvLyDms6jlhaXluLjph49cbiAgICBuZXcgd2VicGFjay5EZWZpbmVQbHVnaW4oe1xuICAgICAgTE9WRVI6ICdZTEwnXG4gICAgfSksXG4gIF0sXG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxRQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBOEIsU0FBQUQsdUJBQUFFLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxLQUFBRSxPQUFBLEVBQUFGLENBQUE7QUFFOUI7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsQ0FBQUYsT0FBQSxHQUNlO0VBQ2JHLEtBQUssRUFBRSxDQUNMLFNBQVM7RUFBRTtFQUNYLDRCQUE0QjtFQUFFO0VBQzlCLGVBQWUsQ0FBQztFQUFBLENBQ2pCO0VBQ0RDLE9BQU8sRUFBRTtFQUNQO0VBQ0EsSUFBSUMsZ0JBQU8sQ0FBQ0MsWUFBWSxDQUFDO0lBQ3ZCQyxLQUFLLEVBQUU7RUFDVCxDQUFDLENBQUM7QUFFTixDQUFDIiwiaWdub3JlTGlzdCI6W119