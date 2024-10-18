import webpack from "webpack";
import webpackMerge from "webpack-merge";
import base from "./webpack.base";

export function devCompiler() {
  const config = webpackMerge(base);

  return webpack(config);
}
