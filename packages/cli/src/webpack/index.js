import webpack from "webpack";
import webpackMerge from "webpack-merge";
import base from "./webpack.base";
import output from "./webpack.output"
import optimization from './webpack.optimization' // 生产时需要
import style from './webpack.style'
import fallback from './webpack.fallback'
import polyfill from './webpack.polyfill'

export function devCompiler() {
  const config = webpackMerge(
    base,
    style(),
    output,
    polyfill,
    fallback
  );

  return webpack(config);
}
