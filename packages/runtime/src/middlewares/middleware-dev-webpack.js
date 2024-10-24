import express from "express";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import { publicPath } from "@kwok/utils";

const router = express.Router();

if (process.env.NODE_ENV === "development") {
  const { devCompiler } = require("@kwok/cli");

  const compiler = devCompiler();

  router.use(
    webpackDevMiddleware(compiler, {
      publicPath,
    })
  );

  // 热更新
  router.use(webpackHotMiddleware(compiler));
}

export default router;
