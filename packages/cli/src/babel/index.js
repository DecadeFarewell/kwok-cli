
function registerBabel() {
  require('@babel/register')({
    // 支持在node环境下使用 ES6+ 语法
    presets: ['@babel/preset-env'],
    // 支持导出默认值，如 export a from 'b'
    plugins: ["@babel/plugin-proposal-export-default-from"]
  });
}

export {
  registerBabel
}