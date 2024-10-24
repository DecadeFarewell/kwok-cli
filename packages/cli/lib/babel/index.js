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
  } catch (error) {
    console.log('error: ', error);
  }
  if (Object.keys(config).length === 0) {
    console.log('Cannot find module "@kwok/vue" in package.json');
  }
  return config;
}
function babelOptionWebpack() {
  return (0, _merge.default)(_babelConfig.default, getFrameWorkConfig(), _babelConfig2.default);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWVyZ2UiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9iYWJlbENvbmZpZyIsIl9iYWJlbENvbmZpZzIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJyZWdpc3RlckJhYmVsIiwicHJlc2V0cyIsInBsdWdpbnMiLCJnZXRGcmFtZVdvcmtDb25maWciLCJjb25maWciLCJiYWJlbENvbmZpZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJiYWJlbE9wdGlvbldlYnBhY2siLCJtZXJnZSIsImNvbmZpZ0Jhc2UiLCJjb25maWdJbXBvcnQiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFiZWwvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lcmdlIGZyb20gJy4vbWVyZ2UnXG5pbXBvcnQgY29uZmlnQmFzZSBmcm9tICcuL2JhYmVsLmNvbmZpZy5iYXNlJ1xuaW1wb3J0IGNvbmZpZ0ltcG9ydCBmcm9tICcuL2JhYmVsLmNvbmZpZy5pbXBvcnQnXG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckJhYmVsKCkge1xuICByZXF1aXJlKCdAYmFiZWwvcmVnaXN0ZXInKSh7XG4gICAgLy8g5pSv5oyB5Zyobm9kZeeOr+Wig+S4i+S9v+eUqCBFUzYrIOivreazlVxuICAgIHByZXNldHM6IFsnQGJhYmVsL3ByZXNldC1lbnYnXSxcbiAgICAvLyDmlK/mjIHlr7zlh7rpu5jorqTlgLzvvIzlpoIgZXhwb3J0IGEgZnJvbSAnYidcbiAgICBwbHVnaW5zOiBbXCJAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWV4cG9ydC1kZWZhdWx0LWZyb21cIl1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEZyYW1lV29ya0NvbmZpZygpIHtcbiAgbGV0IGNvbmZpZyA9IHt9O1xuXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3QgeyBiYWJlbENvbmZpZyB9ID0gcmVxdWlyZShcIkBrd29rL3Z1ZTIuN1wiKTtcblxuICAvLyAgIGNvbmZpZyA9IGJhYmVsQ29uZmlnKCk7XG4gIC8vIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBiYWJlbENvbmZpZyB9ID0gcmVxdWlyZShcIkBrd29rL3Z1ZTNcIik7XG5cbiAgICBjb25maWcgPSBiYWJlbENvbmZpZygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJywgZXJyb3IpO1xuXG4gIH1cblxuICBpZihPYmplY3Qua2V5cyhjb25maWcpLmxlbmd0aCA9PT0gMCkgeyBcbiAgICBjb25zb2xlLmxvZygnQ2Fubm90IGZpbmQgbW9kdWxlIFwiQGt3b2svdnVlXCIgaW4gcGFja2FnZS5qc29uJylcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWJlbE9wdGlvbldlYnBhY2soKSB7XG4gIHJldHVybiBtZXJnZShjb25maWdCYXNlLCBnZXRGcmFtZVdvcmtDb25maWcoKSwgY29uZmlnSW1wb3J0KVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLE1BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFlBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLGFBQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUFnRCxTQUFBRCx1QkFBQUksQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLEtBQUFFLE9BQUEsRUFBQUYsQ0FBQTtBQUV6QyxTQUFTRyxhQUFhQSxDQUFBLEVBQUc7RUFDOUJOLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pCO0lBQ0FPLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO0lBQzlCO0lBQ0FDLE9BQU8sRUFBRSxDQUFDLDRDQUE0QztFQUN4RCxDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVNDLGtCQUFrQkEsQ0FBQSxFQUFHO0VBQzVCLElBQUlDLE1BQU0sR0FBRyxDQUFDLENBQUM7O0VBRWY7RUFDQTs7RUFFQTtFQUNBOztFQUVBLElBQUk7SUFDRixNQUFNO01BQUVDO0lBQVksQ0FBQyxHQUFHWCxPQUFPLENBQUMsWUFBWSxDQUFDO0lBRTdDVSxNQUFNLEdBQUdDLFdBQVcsQ0FBQyxDQUFDO0VBQ3hCLENBQUMsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFRixLQUFLLENBQUM7RUFFL0I7RUFFQSxJQUFHRyxNQUFNLENBQUNDLElBQUksQ0FBQ04sTUFBTSxDQUFDLENBQUNPLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDbkNKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdEQUFnRCxDQUFDO0VBQy9EO0VBRUEsT0FBT0osTUFBTTtBQUNmO0FBRU8sU0FBU1Esa0JBQWtCQSxDQUFBLEVBQUc7RUFDbkMsT0FBTyxJQUFBQyxjQUFLLEVBQUNDLG9CQUFVLEVBQUVYLGtCQUFrQixDQUFDLENBQUMsRUFBRVkscUJBQVksQ0FBQztBQUM5RCIsImlnbm9yZUxpc3QiOltdfQ==