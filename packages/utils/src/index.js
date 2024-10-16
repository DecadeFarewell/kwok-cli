import path from 'path'
import { v4 as uuidv4 } from "uuid";

// 获取package.json对象
export const pkg = require(path.resolve('./package.json'));

// 当前工作目录的绝对路径
export const cwdPath = process.cwd();

// 每次打包生成唯一id
export const uuid = uuidv4().split("-").join("");

// 包名称 
export const packageName = pkg.name

// 库名称
export const library = `${packageName}`;

export const basePath = `dist/${packageName}/${uuid}`;

// 资源异步加载路径(原始域名下的路径
export const publicPath = `/${basePath}/`;

// 静态资源输出文件路径
export const outputPath =  `/${basePath}/`;