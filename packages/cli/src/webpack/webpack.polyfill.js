import webpack from "webpack";
import path from "path";

// 编译缓存配置
export default {
  resolve: {
    // 尝试按顺序解析这些扩展。如果多个文件共享相同的名称但具有不同的扩展名，webpack 将解析扩展名在数组中列在第一位的文件并跳过其余部分。
    extensions: [
      ".js",
      ".ts",
      ".mjs",
      ".cjs",
      ".tsx",
      ".jsx",
      ".json",
      ".wasm",
      ".vue",
    ],
    alias: {
      "@": path.resolve("src/client"),
    },
    // 当正常解析失败时，重定向模块请求。
    fallback: {
      // node库补丁，webpack 5 不再自动 polyfill Node.js 的核心模块
      process: require.resolve("process/browser"),
      buffer: require.resolve("buffer"),
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
      vm: require.resolve("vm-browserify"),
      url: require.resolve("url"),
    },
  },
  plugins: [
    // 注入全局变量
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    }),
  ],
};
