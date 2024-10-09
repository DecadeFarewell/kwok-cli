#!/usr/bin/env node

process.env.NODE_ENV = 'development';

const path = require('path');

const { registerBabel }  = require('@kwok/cli')

registerBabel()

// 后续加载的 JavaScript 文件将被自动编译
require(path.resolve('src/server'));