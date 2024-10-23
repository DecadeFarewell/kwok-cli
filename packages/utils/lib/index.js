"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publicPath = exports.pkg = exports.pathItem = exports.packageName = exports.outputPath = exports.outputManifestPath = exports.library = exports.cwdPath = exports.basePath = void 0;
exports.requireWebpackConfig = requireWebpackConfig;
exports.uuid = void 0;
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var _uuid = require("uuid");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const pathItem = exports.pathItem = process.env.NODE_ENV === "development" ? "development" : "production";

// 获取package.json对象
const pkg = exports.pkg = require(_path.default.resolve("./package.json"));

// webpack config
function requireWebpackConfig() {
  if (_fs.default.existsSync(_path.default.resolve("./src/webpack.config"))) {
    return interopRequireDefault(require(_path.default.resolve("./src/webpack.config")));
  }
  return {};
}

// 当前工作目录的绝对路径
const cwdPath = exports.cwdPath = process.cwd();

// 每次打包生成唯一id
const uuid = exports.uuid = (0, _uuid.v4)().split("-").join("");

// 包名称
const packageName = exports.packageName = pkg.name;

// 库名称
const library = exports.library = `${packageName}`;
const basePath = exports.basePath = `dist/${packageName}/${uuid}`;

// 资源异步加载路径(原始域名下的路径
const publicPath = exports.publicPath = `/${basePath}/`;

// 静态资源输出文件路径
const outputPath = exports.outputPath = `/${basePath}/`;

// manifest输出路径
const outputManifestPath = exports.outputManifestPath = _path.default.resolve("manifest", pathItem, "manifest.json");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGF0aCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ZzIiwiX3V1aWQiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJpbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJvYmoiLCJwYXRoSXRlbSIsImV4cG9ydHMiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJwa2ciLCJwYXRoIiwicmVzb2x2ZSIsInJlcXVpcmVXZWJwYWNrQ29uZmlnIiwiZnMiLCJleGlzdHNTeW5jIiwiY3dkUGF0aCIsImN3ZCIsInV1aWQiLCJ1dWlkdjQiLCJzcGxpdCIsImpvaW4iLCJwYWNrYWdlTmFtZSIsIm5hbWUiLCJsaWJyYXJ5IiwiYmFzZVBhdGgiLCJwdWJsaWNQYXRoIiwib3V0cHV0UGF0aCIsIm91dHB1dE1hbmlmZXN0UGF0aCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuZnVuY3Rpb24gaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlXG4gICAgPyBvYmpcbiAgICA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqLFxuICAgICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHBhdGhJdGVtID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFwiZGV2ZWxvcG1lbnRcIiA6IFwicHJvZHVjdGlvblwiO1xuXG4vLyDojrflj5ZwYWNrYWdlLmpzb27lr7nosaFcbmV4cG9ydCBjb25zdCBwa2cgPSByZXF1aXJlKHBhdGgucmVzb2x2ZShcIi4vcGFja2FnZS5qc29uXCIpKTtcblxuLy8gd2VicGFjayBjb25maWdcbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlV2VicGFja0NvbmZpZygpIHtcbiAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5yZXNvbHZlKFwiLi9zcmMvd2VicGFjay5jb25maWdcIikpKSB7XG4gICAgcmV0dXJuIGludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKHBhdGgucmVzb2x2ZShcIi4vc3JjL3dlYnBhY2suY29uZmlnXCIpKSk7XG4gIH1cblxuICByZXR1cm4ge307XG59XG5cbi8vIOW9k+WJjeW3peS9nOebruW9leeahOe7neWvuei3r+W+hFxuZXhwb3J0IGNvbnN0IGN3ZFBhdGggPSBwcm9jZXNzLmN3ZCgpO1xuXG4vLyDmr4/mrKHmiZPljIXnlJ/miJDllK/kuIBpZFxuZXhwb3J0IGNvbnN0IHV1aWQgPSB1dWlkdjQoKS5zcGxpdChcIi1cIikuam9pbihcIlwiKTtcblxuLy8g5YyF5ZCN56ewXG5leHBvcnQgY29uc3QgcGFja2FnZU5hbWUgPSBwa2cubmFtZTtcblxuLy8g5bqT5ZCN56ewXG5leHBvcnQgY29uc3QgbGlicmFyeSA9IGAke3BhY2thZ2VOYW1lfWA7XG5cbmV4cG9ydCBjb25zdCBiYXNlUGF0aCA9IGBkaXN0LyR7cGFja2FnZU5hbWV9LyR7dXVpZH1gO1xuXG4vLyDotYTmupDlvILmraXliqDovb3ot6/lvoQo5Y6f5aeL5Z+f5ZCN5LiL55qE6Lev5b6EXG5leHBvcnQgY29uc3QgcHVibGljUGF0aCA9IGAvJHtiYXNlUGF0aH0vYDtcblxuLy8g6Z2Z5oCB6LWE5rqQ6L6T5Ye65paH5Lu26Lev5b6EXG5leHBvcnQgY29uc3Qgb3V0cHV0UGF0aCA9IGAvJHtiYXNlUGF0aH0vYDtcblxuLy8gbWFuaWZlc3TovpPlh7rot6/lvoRcbmV4cG9ydCBjb25zdCBvdXRwdXRNYW5pZmVzdFBhdGggPSBwYXRoLnJlc29sdmUoXG4gIFwibWFuaWZlc3RcIixcbiAgcGF0aEl0ZW0sXG4gIFwibWFuaWZlc3QuanNvblwiXG4pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUFBLEtBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLEdBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtBQUFvQyxTQUFBRCx1QkFBQUksQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLEtBQUFFLE9BQUEsRUFBQUYsQ0FBQTtBQUVwQyxTQUFTRyxxQkFBcUJBLENBQUNDLEdBQUcsRUFBRTtFQUNsQyxPQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0gsVUFBVSxHQUN4QkcsR0FBRyxHQUNIO0lBQ0VGLE9BQU8sRUFBRUU7RUFDWCxDQUFDO0FBQ1A7QUFFTyxNQUFNQyxRQUFRLEdBQUFDLE9BQUEsQ0FBQUQsUUFBQSxHQUNuQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsS0FBSyxhQUFhLEdBQUcsYUFBYSxHQUFHLFlBQVk7O0FBRXZFO0FBQ08sTUFBTUMsR0FBRyxHQUFBSixPQUFBLENBQUFJLEdBQUEsR0FBR2IsT0FBTyxDQUFDYyxhQUFJLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztBQUUxRDtBQUNPLFNBQVNDLG9CQUFvQkEsQ0FBQSxFQUFHO0VBQ3JDLElBQUlDLFdBQUUsQ0FBQ0MsVUFBVSxDQUFDSixhQUFJLENBQUNDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUU7SUFDdkQsT0FBT1QscUJBQXFCLENBQUNOLE9BQU8sQ0FBQ2MsYUFBSSxDQUFDQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0VBQzdFO0VBRUEsT0FBTyxDQUFDLENBQUM7QUFDWDs7QUFFQTtBQUNPLE1BQU1JLE9BQU8sR0FBQVYsT0FBQSxDQUFBVSxPQUFBLEdBQUdULE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLENBQUM7O0FBRXBDO0FBQ08sTUFBTUMsSUFBSSxHQUFBWixPQUFBLENBQUFZLElBQUEsR0FBRyxJQUFBQyxRQUFNLEVBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxFQUFFLENBQUM7O0FBRWhEO0FBQ08sTUFBTUMsV0FBVyxHQUFBaEIsT0FBQSxDQUFBZ0IsV0FBQSxHQUFHWixHQUFHLENBQUNhLElBQUk7O0FBRW5DO0FBQ08sTUFBTUMsT0FBTyxHQUFBbEIsT0FBQSxDQUFBa0IsT0FBQSxHQUFHLEdBQUdGLFdBQVcsRUFBRTtBQUVoQyxNQUFNRyxRQUFRLEdBQUFuQixPQUFBLENBQUFtQixRQUFBLEdBQUcsUUFBUUgsV0FBVyxJQUFJSixJQUFJLEVBQUU7O0FBRXJEO0FBQ08sTUFBTVEsVUFBVSxHQUFBcEIsT0FBQSxDQUFBb0IsVUFBQSxHQUFHLElBQUlELFFBQVEsR0FBRzs7QUFFekM7QUFDTyxNQUFNRSxVQUFVLEdBQUFyQixPQUFBLENBQUFxQixVQUFBLEdBQUcsSUFBSUYsUUFBUSxHQUFHOztBQUV6QztBQUNPLE1BQU1HLGtCQUFrQixHQUFBdEIsT0FBQSxDQUFBc0Isa0JBQUEsR0FBR2pCLGFBQUksQ0FBQ0MsT0FBTyxDQUM1QyxVQUFVLEVBQ1ZQLFFBQVEsRUFDUixlQUNGLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=