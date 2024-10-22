module.exports = {
  // webpack-hot-middleware config  https://github.com/webpack-contrib/webpack-hot-middleware#Config
  entry: {
    main: ["webpack-hot-middleware/client?reload=true", "./src/main.ts"],
  }

  // entry: {
  //   index: "./src/index.js",
  //   another: "./src/another-module.js",
  // },

  // entry: {
  //   index: {
  //     import: "./src/index.js",
  //     dependOn: "shared",
  //   },
  //   another: {
  //     import: "./src/another-module.js",
  //     dependOn: "shared",
  //   },
  //   shared: "lodash",
  // },
};
