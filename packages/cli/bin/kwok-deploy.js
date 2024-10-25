#!/usr/bin/env node

const { registerBabel, buildLib }  = require('@kwok/cli')

registerBabel()

Promise.all([
  buildLib(), // 生成lib
]).then(()=>{
  // browserCompiler().then(()=>{
  //   // 上传 sourcemap
  //   // upload();
  //   console.log('browserCompiler-done!')
  // });

  console.log('build-lib-done!')

}).catch((error)=>{
  process.exitCode = 1;
  console.error(error);
}).finally(() => {
  
  console.log('deploy-done!')
});