const { merge } = require('webpack-merge')
const entry = require('./webpackConfig/webpack.entry.js')
const base = require('./webpackConfig/webpack.base.js')
const plugin = require('./webpackConfig/webpack.plugin.js')
const loader = require('./webpackConfig/webpack.loader.js')
const optimization = require('./webpackConfig/webpack.optimization')
const cache = require('./webpackConfig/webpack.cache.js')
const output = require('./webpackConfig/webpakc.output.js')
const vue3 = require('./webpackConfig/webpack.vue3.js')

const config = merge(entry, base, plugin, loader, optimization, output, vue3)

module.exports = config;
