const path = require('path')
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware")

const config = require('./webpack.config.js');
const compiler = webpack(config);

const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')))

app.use((req, res, next) => {
  console.log('req: ', req.path);
  next()
})

// 告知 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置。
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// 热更新
app.use(
  webpackHotMiddleware(compiler)
)

// 将文件 serve 到 port 3000。
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});