#!/usr/bin/env node

const { buildEs, buildLib } = require('@kwok/cli');

Promise.all([
  // buildEs(),
  buildLib(),
]).catch((error)=>{
  process.exitCode = 1;
  console.error(error);
}).finally(() => {
  console.log('done!')
});



