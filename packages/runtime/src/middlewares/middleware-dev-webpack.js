import express from "express";
import webpackDevMiddleware from "webpack-dev-middleware"
import { publicPath } from '@kwok/utils'

// 为什么每一个路由都要经过webpack？
const router = express.Router()

if (process.env.NODE_ENV === "development") {
  const { devCompiler } = require('@kwok/cli');
  
  const compiler = devCompiler();

  const wdmInstance = webpackDevMiddleware(compiler, {
    publicPath // todo: 什么作用？
  })

  router.use(wdmInstance)
}

export default router