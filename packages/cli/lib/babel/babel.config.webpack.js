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
  ],
  plugins: [["@babel/plugin-proposal-export-default-from"] // 支持导出默认值
  ]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImV4cG9ydHMiLCJkZWZhdWx0Iiwic291cmNlTWFwcyIsInRhcmdldHMiLCJicm93c2VycyIsInByZXNldHMiLCJtb2R1bGVzIiwicGx1Z2lucyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYWJlbC9iYWJlbC5jb25maWcud2VicGFjay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDln7rnoYDphY3nva5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc291cmNlTWFwczogdHJ1ZSwgLy8g55Sf5oiQc291cmNlTWFwXG4gIHRhcmdldHM6IHtcbiAgICBicm93c2VyczogXCI+IDAuMDElLCBub3QgZGVhZFwiLFxuICB9LFxuICBwcmVzZXRzOiBbXG4gICAgW1wiQGJhYmVsL3ByZXNldC1lbnZcIiwgeyBtb2R1bGVzOiBmYWxzZSB9XSwgLy8g5YWB6K645L2/55So5pyA5paw55qEIEphdmFTY3JpcHQg54m55oCnICYmIOS4jeWvueaooeWdl+ivreazlei/m+ihjOi9rOaNouS/neeVmeWOn+Wni+eahOaooeWdl+ivreazlSjlj6/ku6Xmm7TlpKfnqIvluqbphY3lkIjphY3lkIh0cmVlLXNoYWtpbmcpXG4gIF0sXG4gIHBsdWdpbnM6IFtcbiAgICBbXCJAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWV4cG9ydC1kZWZhdWx0LWZyb21cIl0sIC8vIOaUr+aMgeWvvOWHuum7mOiupOWAvFxuICBdLFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUEsQ0FBQUMsT0FBQSxHQUNlO0VBQ2JDLFVBQVUsRUFBRSxJQUFJO0VBQUU7RUFDbEJDLE9BQU8sRUFBRTtJQUNQQyxRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0RDLE9BQU8sRUFBRSxDQUNQLENBQUMsbUJBQW1CLEVBQUU7SUFBRUMsT0FBTyxFQUFFO0VBQU0sQ0FBQyxDQUFDLENBQUU7RUFBQSxDQUM1QztFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLDRDQUE0QyxDQUFDLENBQUU7RUFBQTtBQUVwRCxDQUFDIiwiaWdub3JlTGlzdCI6W119