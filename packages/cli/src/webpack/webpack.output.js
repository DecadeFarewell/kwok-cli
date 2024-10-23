import WebpackAssetsfestPlugin from "webpack-assets-manifest";
import { cwdPath, outputPath, publicPath, outputManifestPath } from "@kwok/utils";

export default {
  context: cwdPath, // 基础目录，绝对路径，用于从配置中解析入口点(entry point)和 加载器(loader)
  target: ["web", "es5"],
  output: {
    path: outputPath,
    publicPath: 'auto',
    clean: false, // 每次构建前是否清空 output.path 文件夹内容
    crossOriginLoading: "anonymous", // 通过使用 JSONP 来添加脚本标签，实现按需加载模块，anonymous： 不带凭据(credential) 启用跨域加载，
    chunkLoadingGlobal: "Kwok", // 定义一个全局的变量，用于chunk的加载（// note: 暂时没发现有什么应用场景）
  },
  plugins: [
    // 生成 manifest.json
    new WebpackAssetsfestPlugin({
      output: outputManifestPath,
      writeToDisk: true,
      integrity: true, // 输出资源hash值
      integrityHashes: ["sha384"], // 需要 webpack-subresource-integrity 配合
      publicPath, // 打包资源输出目录
      done(manifest) {
        console.info(
          `The manifest has been written to ${manifest.getOutputPath()}`
        );
      },
    }),
  ]
}