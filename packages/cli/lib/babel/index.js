"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.babelOptionWebpackDev = babelOptionWebpackDev;
exports.babelOptionWebpackProd = babelOptionWebpackProd;
exports.buildEs = buildEs;
exports.buildLib = buildLib;
exports.registerBabel = registerBabel;
var _merge = _interopRequireDefault(require("./merge"));
var _dir = _interopRequireDefault(require("@babel/cli/lib/babel/dir"));
var _babelConfig = _interopRequireDefault(require("./babel.config.base"));
var _babelConfigNode = _interopRequireDefault(require("./babel.config.node.es"));
var _babelConfigNode2 = _interopRequireDefault(require("./babel.config.node.lib"));
var _babelConfig2 = _interopRequireDefault(require("./babel.config.import"));
var _babelConfig3 = _interopRequireDefault(require("./babel.config.webpack"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function registerBabel() {
  require('@babel/register')({
    // 支持在node环境下使用 ES6+ 语法
    presets: ['@babel/preset-env'],
    // 支持导出默认值，如 export a from 'b'
    plugins: ["@babel/plugin-proposal-export-default-from"]
  });
}

// build es
function buildEs() {
  const babelOptions = (0, _merge.default)(_babelConfig.default, _babelConfig2.default, _babelConfigNode.default);
  const cliOptions = {
    outDir: "es",
    filenames: ["src"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    // json 不需要编译
    keepFileExtension: false,
    // 是否保留扩展名，.ts -> .js
    verbose: true,
    // 输出提示
    watch: null,
    relative: null,
    copyFiles: true,
    // 复制不编译的文件， 否则编译后将缺失不编译的文件
    copyIgnored: true,
    // 复制忽略的文件， 否则编译后将缺失忽略的文件
    includeDotfiles: true,
    skipInitialBuild: null
  };
  return (0, _dir.default)({
    cliOptions,
    babelOptions
  });
}

// build lib
function buildLib() {
  const babelOptions = (0, _merge.default)(_babelConfig.default, _babelConfigNode2.default);
  const cliOptions = {
    outDir: "lib",
    filenames: ["src"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    // json 不需要编译
    keepFileExtension: false,
    // 是否保留扩展名，.ts -> .js
    verbose: true,
    // 输出提示
    watch: null,
    relative: null,
    copyFiles: true,
    // 复制不编译的文件， 否则编译后将缺失不编译的文件
    copyIgnored: true,
    // 复制忽略的文件， 否则编译后将缺失忽略的文件
    includeDotfiles: true,
    skipInitialBuild: null
  };
  return (0, _dir.default)({
    cliOptions,
    babelOptions
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
    console.log('Cannot find module "@kwok/vue3" in package.json');
  }
  return config;
}
function babelOptionWebpackDev() {
  return (0, _merge.default)(_babelConfig.default, getFrameWorkConfig(), _babelConfig2.default);
}
function babelOptionWebpackProd() {
  return (0, _merge.default)(_babelConfig.default, getFrameWorkConfig(), _babelConfig2.default, _babelConfig3.default);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWVyZ2UiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9kaXIiLCJfYmFiZWxDb25maWciLCJfYmFiZWxDb25maWdOb2RlIiwiX2JhYmVsQ29uZmlnTm9kZTIiLCJfYmFiZWxDb25maWcyIiwiX2JhYmVsQ29uZmlnMyIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInJlZ2lzdGVyQmFiZWwiLCJwcmVzZXRzIiwicGx1Z2lucyIsImJ1aWxkRXMiLCJiYWJlbE9wdGlvbnMiLCJtZXJnZSIsImNvbmZpZ0Jhc2UiLCJjb25maWdJbXBvcnQiLCJjb25maWdOb2RlRXMiLCJjbGlPcHRpb25zIiwib3V0RGlyIiwiZmlsZW5hbWVzIiwiZXh0ZW5zaW9ucyIsImtlZXBGaWxlRXh0ZW5zaW9uIiwidmVyYm9zZSIsIndhdGNoIiwicmVsYXRpdmUiLCJjb3B5RmlsZXMiLCJjb3B5SWdub3JlZCIsImluY2x1ZGVEb3RmaWxlcyIsInNraXBJbml0aWFsQnVpbGQiLCJiYWJlbERpciIsImJ1aWxkTGliIiwiY29uZmlnTm9kZUxpYiIsImdldEZyYW1lV29ya0NvbmZpZyIsImNvbmZpZyIsImJhYmVsQ29uZmlnIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImJhYmVsT3B0aW9uV2VicGFja0RldiIsImJhYmVsT3B0aW9uV2VicGFja1Byb2QiLCJjb25maWdXZWJwYWNrIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2JhYmVsL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZXJnZSBmcm9tICcuL21lcmdlJ1xuaW1wb3J0IGJhYmVsRGlyIGZyb20gXCJAYmFiZWwvY2xpL2xpYi9iYWJlbC9kaXJcIjtcbmltcG9ydCBjb25maWdCYXNlIGZyb20gJy4vYmFiZWwuY29uZmlnLmJhc2UnXG5pbXBvcnQgY29uZmlnTm9kZUVzIGZyb20gJy4vYmFiZWwuY29uZmlnLm5vZGUuZXMnXG5pbXBvcnQgY29uZmlnTm9kZUxpYiBmcm9tICcuL2JhYmVsLmNvbmZpZy5ub2RlLmxpYidcbmltcG9ydCBjb25maWdJbXBvcnQgZnJvbSAnLi9iYWJlbC5jb25maWcuaW1wb3J0J1xuaW1wb3J0IGNvbmZpZ1dlYnBhY2sgZnJvbSAnLi9iYWJlbC5jb25maWcud2VicGFjaydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQmFiZWwoKSB7XG4gIHJlcXVpcmUoJ0BiYWJlbC9yZWdpc3RlcicpKHtcbiAgICAvLyDmlK/mjIHlnKhub2Rl546v5aKD5LiL5L2/55SoIEVTNisg6K+t5rOVXG4gICAgcHJlc2V0czogWydAYmFiZWwvcHJlc2V0LWVudiddLFxuICAgIC8vIOaUr+aMgeWvvOWHuum7mOiupOWAvO+8jOWmgiBleHBvcnQgYSBmcm9tICdiJ1xuICAgIHBsdWdpbnM6IFtcIkBiYWJlbC9wbHVnaW4tcHJvcG9zYWwtZXhwb3J0LWRlZmF1bHQtZnJvbVwiXVxuICB9KTtcbn1cblxuLy8gYnVpbGQgZXNcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEVzKCkge1xuICBjb25zdCBiYWJlbE9wdGlvbnMgPSBtZXJnZShjb25maWdCYXNlLCBjb25maWdJbXBvcnQsIGNvbmZpZ05vZGVFcylcblxuICBjb25zdCBjbGlPcHRpb25zID0ge1xuICAgIG91dERpcjogXCJlc1wiLFxuICAgIGZpbGVuYW1lczogW1wic3JjXCJdLFxuICAgIGV4dGVuc2lvbnM6IFtcIi50c1wiLCBcIi50c3hcIiwgXCIuanNcIiwgXCIuanN4XCJdLCAvLyBqc29uIOS4jemcgOimgee8luivkVxuICAgIGtlZXBGaWxlRXh0ZW5zaW9uOiBmYWxzZSwgLy8g5piv5ZCm5L+d55WZ5omp5bGV5ZCN77yMLnRzIC0+IC5qc1xuICAgIHZlcmJvc2U6IHRydWUsIC8vIOi+k+WHuuaPkOekulxuICAgIHdhdGNoOiBudWxsLFxuICAgIHJlbGF0aXZlOiBudWxsLFxuICAgIGNvcHlGaWxlczogdHJ1ZSwgLy8g5aSN5Yi25LiN57yW6K+R55qE5paH5Lu277yMIOWQpuWImee8luivkeWQjuWwhue8uuWkseS4jee8luivkeeahOaWh+S7tlxuICAgIGNvcHlJZ25vcmVkOiB0cnVlLCAvLyDlpI3liLblv73nlaXnmoTmlofku7bvvIwg5ZCm5YiZ57yW6K+R5ZCO5bCG57y65aSx5b+955Wl55qE5paH5Lu2XG4gICAgaW5jbHVkZURvdGZpbGVzOiB0cnVlLFxuICAgIHNraXBJbml0aWFsQnVpbGQ6IG51bGwsXG4gIH07XG5cbiAgcmV0dXJuIGJhYmVsRGlyKHsgY2xpT3B0aW9ucywgYmFiZWxPcHRpb25zIH0pO1xuXG59XG5cbi8vIGJ1aWxkIGxpYlxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTGliKCkge1xuICBjb25zdCBiYWJlbE9wdGlvbnMgPSBtZXJnZShjb25maWdCYXNlLCBjb25maWdOb2RlTGliKVxuXG4gIGNvbnN0IGNsaU9wdGlvbnMgPSB7XG4gICAgb3V0RGlyOiBcImxpYlwiLFxuICAgIGZpbGVuYW1lczogW1wic3JjXCJdLFxuICAgIGV4dGVuc2lvbnM6IFtcIi50c1wiLCBcIi50c3hcIiwgXCIuanNcIiwgXCIuanN4XCJdLCAvLyBqc29uIOS4jemcgOimgee8luivkVxuICAgIGtlZXBGaWxlRXh0ZW5zaW9uOiBmYWxzZSwgLy8g5piv5ZCm5L+d55WZ5omp5bGV5ZCN77yMLnRzIC0+IC5qc1xuICAgIHZlcmJvc2U6IHRydWUsIC8vIOi+k+WHuuaPkOekulxuICAgIHdhdGNoOiBudWxsLFxuICAgIHJlbGF0aXZlOiBudWxsLFxuICAgIGNvcHlGaWxlczogdHJ1ZSwgLy8g5aSN5Yi25LiN57yW6K+R55qE5paH5Lu277yMIOWQpuWImee8luivkeWQjuWwhue8uuWkseS4jee8luivkeeahOaWh+S7tlxuICAgIGNvcHlJZ25vcmVkOiB0cnVlLCAvLyDlpI3liLblv73nlaXnmoTmlofku7bvvIwg5ZCm5YiZ57yW6K+R5ZCO5bCG57y65aSx5b+955Wl55qE5paH5Lu2XG4gICAgaW5jbHVkZURvdGZpbGVzOiB0cnVlLFxuICAgIHNraXBJbml0aWFsQnVpbGQ6IG51bGwsXG4gIH1cblxuICByZXR1cm4gYmFiZWxEaXIoeyBjbGlPcHRpb25zLCBiYWJlbE9wdGlvbnMgfSlcbn1cblxuZnVuY3Rpb24gZ2V0RnJhbWVXb3JrQ29uZmlnKCkge1xuICBsZXQgY29uZmlnID0ge307XG5cbiAgLy8gdHJ5IHtcbiAgLy8gICBjb25zdCB7IGJhYmVsQ29uZmlnIH0gPSByZXF1aXJlKFwiQGt3b2svdnVlMi43XCIpO1xuXG4gIC8vICAgY29uZmlnID0gYmFiZWxDb25maWcoKTtcbiAgLy8gfSBjYXRjaCAoZXJyb3IpIHt9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IGJhYmVsQ29uZmlnIH0gPSByZXF1aXJlKFwiQGt3b2svdnVlM1wiKTtcblxuICAgIGNvbmZpZyA9IGJhYmVsQ29uZmlnKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yOiAnLCBlcnJvcik7XG5cbiAgfVxuXG4gIGlmKE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoID09PSAwKSB7IFxuICAgIGNvbnNvbGUubG9nKCdDYW5ub3QgZmluZCBtb2R1bGUgXCJAa3dvay92dWUzXCIgaW4gcGFja2FnZS5qc29uJylcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWJlbE9wdGlvbldlYnBhY2tEZXYoKSB7XG4gIHJldHVybiBtZXJnZShjb25maWdCYXNlLCBnZXRGcmFtZVdvcmtDb25maWcoKSwgY29uZmlnSW1wb3J0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFiZWxPcHRpb25XZWJwYWNrUHJvZCgpIHtcbiAgcmV0dXJuIG1lcmdlKGNvbmZpZ0Jhc2UsIGdldEZyYW1lV29ya0NvbmZpZygpLCBjb25maWdJbXBvcnQsIGNvbmZpZ1dlYnBhY2spXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBQUEsTUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsSUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsWUFB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