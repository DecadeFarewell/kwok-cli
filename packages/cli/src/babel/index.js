import merge from './merge'
import configBase from './babel.config.base'
import configImport from './babel.config.import'

export function registerBabel() {
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
    const { babelConfig } = require("@kwok/vue3");

    config = babelConfig();
  } catch (error) {}

  if(Object.keys(config).length === 0) { 
    console.log('Cannot find module "@kwok/vue3" in package.json')
  }

  return config;
}

export function babelOptionWebpack() {
  return merge(configBase, getFrameWorkConfig(), configImport)
}