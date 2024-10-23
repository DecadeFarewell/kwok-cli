import webpack from "webpack";
import webpackMerge from "webpack-merge";
import base from "./webpack.base";
import output from "./webpack.output"
import optimization from './webpack.optimization'

export function devCompiler() {
  const config = webpackMerge(
    base,
    output,
    optimization
  );

  return webpack(config);
}
