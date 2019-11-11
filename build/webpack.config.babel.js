import path from "path";
import {
  NODE_ENV,
  isDevelopment,
  isProduction,
  appPath
} from "./env";
import optimization from "./optimization";
import module from "./module";
import plugins, { entry } from "./plugins";
export default  {
  // target: "web",
  devtool: isProduction ? "cheap-module-source-map" : "cheap-module-eval-source-map",
  mode: NODE_ENV,
  entry,
  output: {
    path: path.resolve(__dirname, '../prod'),
    filename: isDevelopment ? "js/[name].bundle.js" : "js/[name].[contenthash:8].js",
    chunkFilename: 'js/[name].chunk.[contenthash:8].js',
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "vue$": 'vue/dist/vue.esm.js',
      "@": appPath,
      "service": path.resolve(appPath, "./service"),
      "common": path.resolve(appPath, "./common"),
    }
  },
  performance: {
    // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
    hints: false,
    // 开发环境设置较大防止警告
    // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
    maxEntrypointSize: 5000000, 
    // 最大单个资源体积，默认250000 (bytes)
    maxAssetSize: 3000000
  },
  externals: {
    jquery: 'jQuery'
  },
  optimization: isProduction ? optimization : {},
  module,
  plugins
}
