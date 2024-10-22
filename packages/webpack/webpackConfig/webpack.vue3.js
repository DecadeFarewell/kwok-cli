const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  plugins: [
    new VueLoaderPlugin()
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
        // 当规则匹配时，只使用第一个匹配规则。
        oneOf: [
          {
            // svg vue 组件化
            resourceQuery: /vue/, // demo.svg?vue
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
