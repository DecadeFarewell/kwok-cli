import merge from './merge'
import babelDir from "@babel/cli/lib/babel/dir";
import configBase from './babel.config.base'
import configNodeEs from './babel.config.node.es'
import configNodeLib from './babel.config.node.lib'
import configImport from './babel.config.import'
import configWebpack from './babel.config.webpack'

export function registerBabel() {
  require('@babel/register')({
    // 支持在node环境下使用 ES6+ 语法
    presets: ['@babel/preset-env'],
    // 支持导出默认值，如 export a from 'b'
    plugins: ["@babel/plugin-proposal-export-default-from"]
  });
}

// build es
export function buildEs() {
  const babelOptions = merge(configBase, configImport, configNodeEs)

  const cliOptions = {
    outDir: "es",
    filenames: ["src"],
    extensions: [".ts", ".tsx", ".js", ".jsx"], // json 不需要编译
    keepFileExtension: false, // 是否保留扩展名，.ts -> .js
    verbose: true, // 输出提示
    watch: null,
    relative: null,
    copyFiles: true, // 复制不编译的文件， 否则编译后将缺失不编译的文件
    copyIgnored: true, // 复制忽略的文件， 否则编译后将缺失忽略的文件
    includeDotfiles: true,
    skipInitialBuild: null,
  };

  return babelDir({ cliOptions, babelOptions });

}

// build lib
export function buildLib() {
  const babelOptions = merge(configBase, configNodeLib)

  const cliOptions = {
    outDir: "lib",
    filenames: ["src"],
    extensions: [".ts", ".tsx", ".js", ".jsx"], // json 不需要编译
    keepFileExtension: false, // 是否保留扩展名，.ts -> .js
    verbose: true, // 输出提示
    watch: null,
    relative: null,
    copyFiles: true, // 复制不编译的文件， 否则编译后将缺失不编译的文件
    copyIgnored: true, // 复制忽略的文件， 否则编译后将缺失忽略的文件
    includeDotfiles: true,
    skipInitialBuild: null,
  }

  return babelDir({ cliOptions, babelOptions })
}

function getFrameWorkConfig() {
  let config = {};

  // try {
  //   const { babelConfig } = require("@kwok/vue2.7");

  //   config = babelConfig();
  // } catch (error) {}

  try {
    const { babelConfig } = require("@kwok/vue3");

    config = babelConfig();
  } catch (error) {
    console.log('error: ', error);

  }

  if(Object.keys(config).length === 0) { 
    console.log('Cannot find module "@kwok/vue3" in package.json')
  }

  return config;
}

export function babelOptionWebpackDev() {
  return merge(configBase, getFrameWorkConfig(), configImport)
}

export function babelOptionWebpackProd() {
  return merge(configBase, getFrameWorkConfig(), configImport, configWebpack)
}