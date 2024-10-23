import webpack from "webpack";
import webpackMerge from "webpack-merge";
import base from "./webpack.base";
import output from "./webpack.output"

export function devCompiler() {
  const config = webpackMerge(
    base,
    output
  );

  return webpack(config);
}
