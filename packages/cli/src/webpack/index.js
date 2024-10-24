import webpack from "webpack";
import webpackMerge from "webpack-merge";
import base from "./webpack.base";
import scriptDev from './webpack.script.dev'
import output from "./webpack.output";
import optimization from "./webpack.optimization"; // for production
import style from "./webpack.style";
import cache from "./webpack.cache";
import other from "./webpack.other"
import fallback from "./webpack.fallback";
import polyfill from "./webpack.polyfill";
import { requireWebpackConfig } from "@kwok/utils";

function getFrameWorkConfig() {
  let config = {};

  // try {
  //   const { webpackConfig } = require("@kwok/vue2.7");

  //   config = webpackConfig();
  // } catch (error) {}

  try {
    const { webpackConfig } = require("@kwok/vue3");

    config = webpackConfig();
  } catch (error) {
    console.log('error: ', error);
  }

  if(Object.keys(config).length === 0) { 
    console.log('Cannot find module "@kwok/vue3" in package.json')
  }

  return config;
}

export function devCompiler() {
  const config = webpackMerge(
    base,
    scriptDev,
    getFrameWorkConfig(),
    style(),
    cache,
    optimization,
    output,
    polyfill,
    other,
    fallback,
    requireWebpackConfig().default
  );

  return webpack(config);
}
