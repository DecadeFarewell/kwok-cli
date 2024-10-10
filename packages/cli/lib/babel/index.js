"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerBabel = registerBabel;
function registerBabel() {
  require('@babel/register')({
    presets: ['@babel/preset-env']
  });
}

// module.exports = {
//   registerBabel
// }