function registerBabel() {
  require('@babel/register')({
    presets: ['@babel/preset-env']
  });
}
module.exports = {
  registerBabel
};