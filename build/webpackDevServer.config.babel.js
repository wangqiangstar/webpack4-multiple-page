import path from "path";
import { appPath, MOCKPORT } from "./env";

export default {
  contentBase: path.join(__dirname,"../", "./prod"),
  publicPath: "/",
  watchContentBase: true,
  overlay: true, // 浏览器页面上显示错误
  open: false, // 开启浏览器
  stats: "errors-only", //stats: "errors-only"表示只打印错误：
  hot: true, // 开启热更新
  disableHostCheck: true,
  before (app, server) {
    server._watch(path.resolve(appPath, "pages/**/*.html"));
  },
  proxy: {
    '/api': { // mock代理服务
        target: `http://localhost:${MOCKPORT}`,
        changeOrigin: true
    }
  }
}