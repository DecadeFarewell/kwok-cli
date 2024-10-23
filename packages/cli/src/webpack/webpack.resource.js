// https://webpack.js.org/guides/asset-modules/
export default {
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|eot|woff|ttf)$/i,
        type: "asset/resource",
      }
    ],
  },
};