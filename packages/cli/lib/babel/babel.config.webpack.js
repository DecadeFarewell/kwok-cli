"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 基础配置
var _default = exports.default = {
  sourceMaps: true,
  // 生成sourceMap
  targets: {
    browsers: "> 0.01%, not dead"
  },
  presets: [["@babel/preset-env", {
    modules: false
  }] // 允许使用最新的 JavaScript 特性 && 不对模块语法进行转换保留原始的模块语法(可以更大程度配合配合tree-shaking)
  ]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImV4cG9ydHMiLCJkZWZhdWx0Iiwic291cmNlTWFwcyIsInRhcmdldHMiLCJicm93c2VycyIsInByZXNldHMiLCJtb2R1bGVzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2JhYmVsL2JhYmVsLmNvbmZpZy53ZWJwYWNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIOWfuuehgOmFjee9rlxuZXhwb3J0IGRlZmF1bHQge1xuICBzb3VyY2VNYXBzOiB0cnVlLCAvLyDnlJ/miJBzb3VyY2VNYXBcbiAgdGFyZ2V0czoge1xuICAgIGJyb3dzZXJzOiBcIj4gMC4wMSUsIG5vdCBkZWFkXCIsXG4gIH0sXG4gIHByZXNldHM6IFtcbiAgICBbXCJAYmFiZWwvcHJlc2V0LWVudlwiLCB7IG1vZHVsZXM6IGZhbHNlIH1dLCAvLyDlhYHorrjkvb/nlKjmnIDmlrDnmoQgSmF2YVNjcmlwdCDnibnmgKcgJiYg5LiN5a+55qih5Z2X6K+t5rOV6L+b6KGM6L2s5o2i5L+d55WZ5Y6f5aeL55qE5qih5Z2X6K+t5rOVKOWPr+S7peabtOWkp+eoi+W6pumFjeWQiOmFjeWQiHRyZWUtc2hha2luZylcbiAgXSxcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBLENBQUFDLE9BQUEsR0FDZTtFQUNiQyxVQUFVLEVBQUUsSUFBSTtFQUFFO0VBQ2xCQyxPQUFPLEVBQUU7SUFDUEMsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLG1CQUFtQixFQUFFO0lBQUVDLE9BQU8sRUFBRTtFQUFNLENBQUMsQ0FBQyxDQUFFO0VBQUE7QUFFL0MsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==