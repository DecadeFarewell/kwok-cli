const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  plugins: [
    new VueLoaderPlugin(),

    // 支持setup语法糖 https://www.npmjs.com/package/unplugin-vue-setup-extend-plus
    // require("unplugin-vue-setup-extend-plus/webpack").default({
    //   /* options */
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              // 标签之间的空格
              compilerOptions: { preserveWhitespace: false },
            },
          },
        ],
      },
      {
        test: /\.svg$/, // svg的vue组件化
        oneOf: [
          {
            // svg vue 组件化
            resourceQuery: /vue/,
            use: ["vue-loader", "vue-svg-loader"],
          },
          {
            type: "asset/resource",
          },
        ],
      },
    ],
  },
};
