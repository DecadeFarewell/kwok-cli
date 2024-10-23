"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _webpackAssetsManifest = _interopRequireDefault(require("webpack-assets-manifest"));
var _utils = require("@kwok/utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  context: _utils.cwdPath,
  // 基础目录，绝对路径，用于从配置中解析入口点(entry point)和 加载器(loader)
  target: ["web", "es5"],
  output: {
    path: _utils.outputPath,
    publicPath: 'auto',
    clean: false,
    // 每次构建前是否清空 output.path 文件夹内容
    crossOriginLoading: "anonymous",
    // 通过使用 JSONP 来添加脚本标签，实现按需加载模块，anonymous： 不带凭据(credential) 启用跨域加载，
    chunkLoadingGlobal: "Kwok" // 定义一个全局的变量，用于chunk的加载（// note: 暂时没发现有什么应用场景）
  },
  plugins: [
  // 生成 manifest.json
  new _webpackAssetsManifest.default({
    output: _utils.outputManifestPath,
    writeToDisk: true,
    integrity: true,
    // 输出资源hash值
    integrityHashes: ["sha384"],
    // 需要 webpack-subresource-integrity 配合
    publicPath: _utils.publicPath,
    // 打包资源输出目录
    entrypoints: true,
    entrypointsUseAssets: true,
    done(manifest) {
      console.info(`The manifest has been written to ${manifest.getOutputPath()}`);
    }
  })]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfd2VicGFja0Fzc2V0c01hbmlmZXN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfdXRpbHMiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJjb250ZXh0IiwiY3dkUGF0aCIsInRhcmdldCIsIm91dHB1dCIsInBhdGgiLCJvdXRwdXRQYXRoIiwicHVibGljUGF0aCIsImNsZWFuIiwiY3Jvc3NPcmlnaW5Mb2FkaW5nIiwiY2h1bmtMb2FkaW5nR2xvYmFsIiwicGx1Z2lucyIsIldlYnBhY2tBc3NldHNmZXN0UGx1Z2luIiwib3V0cHV0TWFuaWZlc3RQYXRoIiwid3JpdGVUb0Rpc2siLCJpbnRlZ3JpdHkiLCJpbnRlZ3JpdHlIYXNoZXMiLCJlbnRyeXBvaW50cyIsImVudHJ5cG9pbnRzVXNlQXNzZXRzIiwiZG9uZSIsIm1hbmlmZXN0IiwiY29uc29sZSIsImluZm8iLCJnZXRPdXRwdXRQYXRoIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYnBhY2svd2VicGFjay5vdXRwdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYnBhY2tBc3NldHNmZXN0UGx1Z2luIGZyb20gXCJ3ZWJwYWNrLWFzc2V0cy1tYW5pZmVzdFwiO1xuaW1wb3J0IHsgY3dkUGF0aCwgb3V0cHV0UGF0aCwgcHVibGljUGF0aCwgb3V0cHV0TWFuaWZlc3RQYXRoIH0gZnJvbSBcIkBrd29rL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGV4dDogY3dkUGF0aCwgLy8g5Z+656GA55uu5b2V77yM57ud5a+56Lev5b6E77yM55So5LqO5LuO6YWN572u5Lit6Kej5p6Q5YWl5Y+j54K5KGVudHJ5IHBvaW50KeWSjCDliqDovb3lmagobG9hZGVyKVxuICB0YXJnZXQ6IFtcIndlYlwiLCBcImVzNVwiXSxcbiAgb3V0cHV0OiB7XG4gICAgcGF0aDogb3V0cHV0UGF0aCxcbiAgICBwdWJsaWNQYXRoOiAnYXV0bycsXG4gICAgY2xlYW46IGZhbHNlLCAvLyDmr4/mrKHmnoTlu7rliY3mmK/lkKbmuIXnqbogb3V0cHV0LnBhdGgg5paH5Lu25aS55YaF5a65XG4gICAgY3Jvc3NPcmlnaW5Mb2FkaW5nOiBcImFub255bW91c1wiLCAvLyDpgJrov4fkvb/nlKggSlNPTlAg5p2l5re75Yqg6ISa5pys5qCH562+77yM5a6e546w5oyJ6ZyA5Yqg6L295qih5Z2X77yMYW5vbnltb3Vz77yaIOS4jeW4puWHreaNrihjcmVkZW50aWFsKSDlkK/nlKjot6jln5/liqDovb3vvIxcbiAgICBjaHVua0xvYWRpbmdHbG9iYWw6IFwiS3dva1wiLCAvLyDlrprkuYnkuIDkuKrlhajlsYDnmoTlj5jph4/vvIznlKjkuo5jaHVua+eahOWKoOi9ve+8iC8vIG5vdGU6IOaaguaXtuayoeWPkeeOsOacieS7gOS5iOW6lOeUqOWcuuaZr++8iVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgLy8g55Sf5oiQIG1hbmlmZXN0Lmpzb25cbiAgICBuZXcgV2VicGFja0Fzc2V0c2Zlc3RQbHVnaW4oe1xuICAgICAgb3V0cHV0OiBvdXRwdXRNYW5pZmVzdFBhdGgsXG4gICAgICB3cml0ZVRvRGlzazogdHJ1ZSxcbiAgICAgIGludGVncml0eTogdHJ1ZSwgLy8g6L6T5Ye66LWE5rqQaGFzaOWAvFxuICAgICAgaW50ZWdyaXR5SGFzaGVzOiBbXCJzaGEzODRcIl0sIC8vIOmcgOimgSB3ZWJwYWNrLXN1YnJlc291cmNlLWludGVncml0eSDphY3lkIhcbiAgICAgIHB1YmxpY1BhdGgsIC8vIOaJk+WMhei1hOa6kOi+k+WHuuebruW9lVxuICAgICAgZW50cnlwb2ludHM6IHRydWUsXG4gICAgICBlbnRyeXBvaW50c1VzZUFzc2V0czogdHJ1ZSxcbiAgICAgIGRvbmUobWFuaWZlc3QpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgIGBUaGUgbWFuaWZlc3QgaGFzIGJlZW4gd3JpdHRlbiB0byAke21hbmlmZXN0LmdldE91dHB1dFBhdGgoKX1gXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0pLFxuICBdXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxzQkFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO0FBQWtGLFNBQUFELHVCQUFBRyxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUsT0FBQSxFQUFBRixDQUFBO0FBQUEsSUFBQUcsUUFBQSxHQUFBQyxPQUFBLENBQUFGLE9BQUEsR0FFbkU7RUFDYkcsT0FBTyxFQUFFQyxjQUFPO0VBQUU7RUFDbEJDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7RUFDdEJDLE1BQU0sRUFBRTtJQUNOQyxJQUFJLEVBQUVDLGlCQUFVO0lBQ2hCQyxVQUFVLEVBQUUsTUFBTTtJQUNsQkMsS0FBSyxFQUFFLEtBQUs7SUFBRTtJQUNkQyxrQkFBa0IsRUFBRSxXQUFXO0lBQUU7SUFDakNDLGtCQUFrQixFQUFFLE1BQU0sQ0FBRTtFQUM5QixDQUFDO0VBQ0RDLE9BQU8sRUFBRTtFQUNQO0VBQ0EsSUFBSUMsOEJBQXVCLENBQUM7SUFDMUJSLE1BQU0sRUFBRVMseUJBQWtCO0lBQzFCQyxXQUFXLEVBQUUsSUFBSTtJQUNqQkMsU0FBUyxFQUFFLElBQUk7SUFBRTtJQUNqQkMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQUU7SUFDN0JULFVBQVUsRUFBVkEsaUJBQVU7SUFBRTtJQUNaVSxXQUFXLEVBQUUsSUFBSTtJQUNqQkMsb0JBQW9CLEVBQUUsSUFBSTtJQUMxQkMsSUFBSUEsQ0FBQ0MsUUFBUSxFQUFFO01BQ2JDLE9BQU8sQ0FBQ0MsSUFBSSxDQUNWLG9DQUFvQ0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsQ0FBQyxFQUM5RCxDQUFDO0lBQ0g7RUFDRixDQUFDLENBQUM7QUFFTixDQUFDIiwiaWdub3JlTGlzdCI6W119