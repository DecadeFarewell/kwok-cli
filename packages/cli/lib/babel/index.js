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
var _babelConfigNode = _interopRequireDefault(require("./babel.config.node.lib"));
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

// todo: build es
function buildEs() {}

// build lib
function buildLib() {
  const babelOptions = (0, _merge.default)(_babelConfig.default, _babelConfigNode.default);
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
    // 不编译的文件 copy
    copyIgnored: true,
    // 排除的文件 copy
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWVyZ2UiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9kaXIiLCJfYmFiZWxDb25maWciLCJfYmFiZWxDb25maWdOb2RlIiwiX2JhYmVsQ29uZmlnMiIsIl9iYWJlbENvbmZpZzMiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJyZWdpc3RlckJhYmVsIiwicHJlc2V0cyIsInBsdWdpbnMiLCJidWlsZEVzIiwiYnVpbGRMaWIiLCJiYWJlbE9wdGlvbnMiLCJtZXJnZSIsImNvbmZpZ0Jhc2UiLCJjb25maWdOb2RlTGliIiwiY2xpT3B0aW9ucyIsIm91dERpciIsImZpbGVuYW1lcyIsImV4dGVuc2lvbnMiLCJrZWVwRmlsZUV4dGVuc2lvbiIsInZlcmJvc2UiLCJ3YXRjaCIsInJlbGF0aXZlIiwiY29weUZpbGVzIiwiY29weUlnbm9yZWQiLCJpbmNsdWRlRG90ZmlsZXMiLCJza2lwSW5pdGlhbEJ1aWxkIiwiYmFiZWxEaXIiLCJnZXRGcmFtZVdvcmtDb25maWciLCJjb25maWciLCJiYWJlbENvbmZpZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJiYWJlbE9wdGlvbldlYnBhY2tEZXYiLCJjb25maWdJbXBvcnQiLCJiYWJlbE9wdGlvbldlYnBhY2tQcm9kIiwiY29uZmlnV2VicGFjayJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYWJlbC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVyZ2UgZnJvbSAnLi9tZXJnZSdcbmltcG9ydCBiYWJlbERpciBmcm9tIFwiQGJhYmVsL2NsaS9saWIvYmFiZWwvZGlyXCI7XG5pbXBvcnQgY29uZmlnQmFzZSBmcm9tICcuL2JhYmVsLmNvbmZpZy5iYXNlJ1xuaW1wb3J0IGNvbmZpZ05vZGVMaWIgZnJvbSAnLi9iYWJlbC5jb25maWcubm9kZS5saWInXG5pbXBvcnQgY29uZmlnSW1wb3J0IGZyb20gJy4vYmFiZWwuY29uZmlnLmltcG9ydCdcbmltcG9ydCBjb25maWdXZWJwYWNrIGZyb20gJy4vYmFiZWwuY29uZmlnLndlYnBhY2snXG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckJhYmVsKCkge1xuICByZXF1aXJlKCdAYmFiZWwvcmVnaXN0ZXInKSh7XG4gICAgLy8g5pSv5oyB5Zyobm9kZeeOr+Wig+S4i+S9v+eUqCBFUzYrIOivreazlVxuICAgIHByZXNldHM6IFsnQGJhYmVsL3ByZXNldC1lbnYnXSxcbiAgICAvLyDmlK/mjIHlr7zlh7rpu5jorqTlgLzvvIzlpoIgZXhwb3J0IGEgZnJvbSAnYidcbiAgICBwbHVnaW5zOiBbXCJAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWV4cG9ydC1kZWZhdWx0LWZyb21cIl1cbiAgfSk7XG59XG5cbi8vIHRvZG86IGJ1aWxkIGVzXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFcygpIHtcbn1cblxuLy8gYnVpbGQgbGliXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMaWIoKSB7XG4gIGNvbnN0IGJhYmVsT3B0aW9ucyA9IG1lcmdlKGNvbmZpZ0Jhc2UsIGNvbmZpZ05vZGVMaWIpXG5cbiAgY29uc3QgY2xpT3B0aW9ucyA9IHtcbiAgICBvdXREaXI6IFwibGliXCIsXG4gICAgZmlsZW5hbWVzOiBbXCJzcmNcIl0sXG4gICAgZXh0ZW5zaW9uczogW1wiLnRzXCIsIFwiLnRzeFwiLCBcIi5qc1wiLCBcIi5qc3hcIl0sIC8vIGpzb24g5LiN6ZyA6KaB57yW6K+RXG4gICAga2VlcEZpbGVFeHRlbnNpb246IGZhbHNlLCAvLyDmmK/lkKbkv53nlZnmianlsZXlkI3vvIwudHMgLT4gLmpzXG4gICAgdmVyYm9zZTogdHJ1ZSwgLy8g6L6T5Ye65o+Q56S6XG4gICAgd2F0Y2g6IG51bGwsXG4gICAgcmVsYXRpdmU6IG51bGwsXG4gICAgY29weUZpbGVzOiB0cnVlLCAvLyDkuI3nvJbor5HnmoTmlofku7YgY29weVxuICAgIGNvcHlJZ25vcmVkOiB0cnVlLCAvLyDmjpLpmaTnmoTmlofku7YgY29weVxuICAgIGluY2x1ZGVEb3RmaWxlczogdHJ1ZSxcbiAgICBza2lwSW5pdGlhbEJ1aWxkOiBudWxsLFxuICB9XG5cbiAgcmV0dXJuIGJhYmVsRGlyKHsgY2xpT3B0aW9ucywgYmFiZWxPcHRpb25zIH0pXG59XG5cbmZ1bmN0aW9uIGdldEZyYW1lV29ya0NvbmZpZygpIHtcbiAgbGV0IGNvbmZpZyA9IHt9O1xuXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3QgeyBiYWJlbENvbmZpZyB9ID0gcmVxdWlyZShcIkBrd29rL3Z1ZTIuN1wiKTtcblxuICAvLyAgIGNvbmZpZyA9IGJhYmVsQ29uZmlnKCk7XG4gIC8vIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBiYWJlbENvbmZpZyB9ID0gcmVxdWlyZShcIkBrd29rL3Z1ZTNcIik7XG5cbiAgICBjb25maWcgPSBiYWJlbENvbmZpZygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJywgZXJyb3IpO1xuXG4gIH1cblxuICBpZihPYmplY3Qua2V5cyhjb25maWcpLmxlbmd0aCA9PT0gMCkgeyBcbiAgICBjb25zb2xlLmxvZygnQ2Fubm90IGZpbmQgbW9kdWxlIFwiQGt3b2svdnVlM1wiIGluIHBhY2thZ2UuanNvbicpXG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFiZWxPcHRpb25XZWJwYWNrRGV2KCkge1xuICByZXR1cm4gbWVyZ2UoY29uZmlnQmFzZSwgZ2V0RnJhbWVXb3JrQ29uZmlnKCksIGNvbmZpZ0ltcG9ydClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhYmVsT3B0aW9uV2VicGFja1Byb2QoKSB7XG4gIHJldHVybiBtZXJnZShjb25maWdCYXNlLCBnZXRGcmFtZVdvcmtDb25maWcoKSwgY29uZmlnSW1wb3J0LCBjb25maWdXZWJwYWNrKVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUFBLE1BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FB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