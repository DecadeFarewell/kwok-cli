// 基础配置
export default {
  plugins: [
    // 支持vant样式的按需导入
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: 'es',
        // 指定样式路径
        style: (name) => `${name}/style/less`,
      },
      "vant",
    ],
  ],
};
