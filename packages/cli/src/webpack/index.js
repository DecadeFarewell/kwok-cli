import webpack from "webpack";
import webpackMerge from "webpack-merge";
import base from "./webpack.base";
import output from "./webpack.output";
import optimization from "./webpack.optimization"; // for production
import style from "./webpack.style";
import cache from "./webpack.cache";
import fallback from "./webpack.fallback";
import polyfill from "./webpack.polyfill";
import { requireWebpackConfig } from "@kwok/utils";

export function devCompiler() {
  const config = webpackMerge(
    base,
    style(),
    cache,
    output,
    polyfill,
    fallback,
    requireWebpackConfig().default
  );

  return webpack(config);
}
