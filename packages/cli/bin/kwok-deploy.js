#!/usr/bin/env node

const { registerBabel, buildLib, browserCompiler }  = require('@kwok/cli')

registerBabel()

Promise.all([
  buildLib(), // 生成lib
]).then(()=>{
  browserCompiler().then(()=>{
    console.log('browserCompiler-done!')
  });

}).catch((error)=>{
  process.exitCode = 1;
  console.error(error);
}).finally(() => {
  
  console.log('deploy-done!')
});