const { merge } = require('webpack-merge')
const entry = require('./webpackConfig/webpack.entry.js')
const base = require('./webpackConfig/webpack.base.js')
const plugin = require('./webpackConfig/webpack.plugin.js')
const loader = require('./webpackConfig/webpack.loader.js')
const optimization = require('./webpackConfig/webpack.optimization')
const output = require('./webpackConfig/webpakc.output.js')

const config = merge(entry, base, plugin, loader, optimization, output)

module.exports = config;
