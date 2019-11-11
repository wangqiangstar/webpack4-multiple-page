import { isProduction, shouldUseSourceMap } from "./env";
import TerserWebpackPlugin from "terser-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";

export default {
  runtimeChunk: {
    name: entrypoint => `runtime-${entrypoint.name.replace('/', '-')}`
  },
  splitChunks: {
    chunks:'async',
    minSize: 0,
    cacheGroups: {
      default: false,
      vendor: { // 抽离第三方插件
        test: /node_modules/, // 指定是node_modules下的第三方包
        chunks: "initial",
        enforce: true,
        priority: 10,
        name: "vendor", // 打包后的文件名，任意命名
      },
      common: { // 抽离自己写的公共代码，common这个名字可以随意起
        minChunks: 2,
        name:'commons',
        chunks: 'all',
        priority: 5,
        enforce: true
      }
    }
  },
  minimizer: [
    isProduction && new TerserWebpackPlugin({
      parallel: true,
      cache: true,
      sourceMap: shouldUseSourceMap,
    }),
    isProduction && new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        map: shouldUseSourceMap
          ? {
              inline: false,
              annotation: true,
            }
          : false,
      },
    })
  ].filter(Boolean)
}