"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.babelOptionWebpack = babelOptionWebpack;
exports.registerBabel = registerBabel;
var _merge = _interopRequireDefault(require("./merge"));
var _babelConfig = _interopRequireDefault(require("./babel.config.base"));
var _babelConfig2 = _interopRequireDefault(require("./babel.config.import"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function registerBabel() {
  require('@babel/register')({
    // 支持在node环境下使用 ES6+ 语法
    presets: ['@babel/preset-env'],
    // 支持导出默认值，如 export a from 'b'
    plugins: ["@babel/plugin-proposal-export-default-from"]
  });
}
function getFrameWorkConfig() {
  let config = {};

  // try {
  //   const { babelConfig } = require("@kwok/vue2.7");

  //   config = babelConfig();
  // } catch (error) {}

  try {
    const {
      babelConfig
    } = require("@kwok/vue3");
    config = babelConfig();
  } catch (error) {}
  if (Object.keys(config).length === 0) {
    console.log('Cannot find module "@kwok/vue3" in package.json');
  }
  return config;
}
function babelOptionWebpack() {
  return (0, _merge.default)(_babelConfig.default, getFrameWorkConfig(), _babelConfig2.default);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWVyZ2UiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9iYWJlbENvbmZpZyIsIl9iYWJlbENvbmZpZzIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJyZWdpc3RlckJhYmVsIiwicHJlc2V0cyIsInBsdWdpbnMiLCJnZXRGcmFtZVdvcmtDb25maWciLCJjb25maWciLCJiYWJlbENvbmZpZyIsImVycm9yIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJiYWJlbE9wdGlvbldlYnBhY2siLCJtZXJnZSIsImNvbmZpZ0Jhc2UiLCJjb25maWdJbXBvcnQiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFiZWwvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lcmdlIGZyb20gJy4vbWVyZ2UnXG5pbXBvcnQgY29uZmlnQmFzZSBmcm9tICcuL2JhYmVsLmNvbmZpZy5iYXNlJ1xuaW1wb3J0IGNvbmZpZ0ltcG9ydCBmcm9tICcuL2JhYmVsLmNvbmZpZy5pbXBvcnQnXG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckJhYmVsKCkge1xuICByZXF1aXJlKCdAYmFiZWwvcmVnaXN0ZXInKSh7XG4gICAgLy8g5pSv5oyB5Zyobm9kZeeOr+Wig+S4i+S9v+eUqCBFUzYrIOivreazlVxuICAgIHByZXNldHM6IFsnQGJhYmVsL3ByZXNldC1lbnYnXSxcbiAgICAvLyDmlK/mjIHlr7zlh7rpu5jorqTlgLzvvIzlpoIgZXhwb3J0IGEgZnJvbSAnYidcbiAgICBwbHVnaW5zOiBbXCJAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWV4cG9ydC1kZWZhdWx0LWZyb21cIl1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEZyYW1lV29ya0NvbmZpZygpIHtcbiAgbGV0IGNvbmZpZyA9IHt9O1xuXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3QgeyBiYWJlbENvbmZpZyB9ID0gcmVxdWlyZShcIkBrd29rL3Z1ZTIuN1wiKTtcblxuICAvLyAgIGNvbmZpZyA9IGJhYmVsQ29uZmlnKCk7XG4gIC8vIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBiYWJlbENvbmZpZyB9ID0gcmVxdWlyZShcIkBrd29rL3Z1ZTNcIik7XG5cbiAgICBjb25maWcgPSBiYWJlbENvbmZpZygpO1xuICB9IGNhdGNoIChlcnJvcikge31cblxuICBpZihPYmplY3Qua2V5cyhjb25maWcpLmxlbmd0aCA9PT0gMCkgeyBcbiAgICBjb25zb2xlLmxvZygnQ2Fubm90IGZpbmQgbW9kdWxlIFwiQGt3b2svdnVlM1wiIGluIHBhY2thZ2UuanNvbicpXG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFiZWxPcHRpb25XZWJwYWNrKCkge1xuICByZXR1cm4gbWVyZ2UoY29uZmlnQmFzZSwgZ2V0RnJhbWVXb3JrQ29uZmlnKCksIGNvbmZpZ0ltcG9ydClcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxNQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxZQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxhQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFBZ0QsU0FBQUQsdUJBQUFJLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxLQUFBRSxPQUFBLEVBQUFGLENBQUE7QUFFekMsU0FBU0csYUFBYUEsQ0FBQSxFQUFHO0VBQzlCTixPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6QjtJQUNBTyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUM5QjtJQUNBQyxPQUFPLEVBQUUsQ0FBQyw0Q0FBNEM7RUFDeEQsQ0FBQyxDQUFDO0FBQ0o7QUFFQSxTQUFTQyxrQkFBa0JBLENBQUEsRUFBRztFQUM1QixJQUFJQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztFQUVmO0VBQ0E7O0VBRUE7RUFDQTs7RUFFQSxJQUFJO0lBQ0YsTUFBTTtNQUFFQztJQUFZLENBQUMsR0FBR1gsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUU3Q1UsTUFBTSxHQUFHQyxXQUFXLENBQUMsQ0FBQztFQUN4QixDQUFDLENBQUMsT0FBT0MsS0FBSyxFQUFFLENBQUM7RUFFakIsSUFBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNKLE1BQU0sQ0FBQyxDQUFDSyxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQ25DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQztFQUNoRTtFQUVBLE9BQU9QLE1BQU07QUFDZjtBQUVPLFNBQVNRLGtCQUFrQkEsQ0FBQSxFQUFHO0VBQ25DLE9BQU8sSUFBQUMsY0FBSyxFQUFDQyxvQkFBVSxFQUFFWCxrQkFBa0IsQ0FBQyxDQUFDLEVBQUVZLHFCQUFZLENBQUM7QUFDOUQiLCJpZ25vcmVMaXN0IjpbXX0=