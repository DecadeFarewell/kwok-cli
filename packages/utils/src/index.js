import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

function interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
}

export const pathItem =
  process.env.NODE_ENV === "development" ? "development" : "production";

// 获取package.json对象
export const pkg = require(path.resolve("./package.json"));

// webpack config
export function requireWebpackConfig() {
  const webpackConfigPath = "./src/webpack.config";

  if (fs.existsSync(path.resolve(webpackConfigPath))) {
    return interopRequireDefault(require(path.resolve(webpackConfigPath)));
  }

  return {
    default: {}
  };
}

// 当前工作目录的绝对路径
export const cwdPath = process.cwd();

// 每次打包生成唯一id
export const uuid = uuidv4().split("-").join("");

// 包名称
export const packageName = pkg.name;

// 库名称
export const library = `${packageName}`;

export const basePath = `dist/${packageName}/${uuid}`;

// 资源异步加载路径(原始域名下的路径
export const publicPath = `/${basePath}/`;

// 静态资源输出文件路径
export const outputPath = `/${basePath}/`;

// manifest输出路径
export const outputManifestPath = path.resolve(
  "manifest",
  pathItem,
  "manifest.json"
);
