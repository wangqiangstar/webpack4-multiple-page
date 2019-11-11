import path from "path";
import fs from "fs";
import glob from "glob";
import chalk from "chalk";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const { VueLoaderPlugin } = require('vue-loader');
import {
  isProduction,
  isDevelopment,
  appPath,
  isBundleAnalyze
} from "./env";

import configPageEntry from "../dev.entry.config"

function getEntry () {
  let entry = {};
  //读取src目录所有page入口
  glob.sync("./src/pages/**/index.js")
      .forEach(function (name) {
        try {
          let start = name.indexOf('src/') + 4,
          end = name.length - 3;
          let eArr = [];
          let n = name.slice(start, end);
          n = n.slice(0, n.lastIndexOf('/')); //保存各个组件的入口 
          n = n.split('pages/')[1];
          if (!isProduction && configPageEntry.includes(n)){
              eArr.push(name);
              entry[n] = eArr;
          } else if(isProduction) {
              eArr.push(name);
              entry[n] = eArr;
          }
        } catch (error) {
          console.log(error)
        }
          
      });
      if (!isProduction) {
        console.log(chalk.blue('server running pages includes: \n'), entry)
      }
  return entry;
};

const entry = getEntry();

const plugins = [
  isProduction && new CleanWebpackPlugin(),
  new VueLoaderPlugin(),
  new ProgressBarPlugin({
    summary: isDevelopment
  }),
  isDevelopment && new webpack.HotModuleReplacementPlugin(),
  isProduction && new MiniCssExtractPlugin({
    filename: 'css/[name].[contentHash:8].css',
    chunkFilename: 'css/[name].chunk.[contentHash:8].css'
  }),
  isProduction && new webpack.HashedModuleIdsPlugin({
    hashFunction: 'sha256',
    hashDigest: 'hex',
    hashDigestLength: 20
  }),
  isProduction && isBundleAnalyze && new BundleAnalyzerPlugin()
].filter(Boolean);

function getHtmlWebpackPluginConfigs () {
  const res = [];
  for (let [entryName, entryPath] of Object.entries(entry)) {
    const htmlFilePath = `${appPath}/pages/${entryName}/index.html`;
    if (!fs.existsSync(htmlFilePath)) {
      throw new Error(`file: ${htmlFilePath} not exist`);
    }
    
    const plugin = new HtmlWebpackPlugin({
      template: htmlFilePath,
      filename: isProduction ? `${entryName.replace('/', '-')}.html` : `${entryName.replace('/', '-')}.html`,
      chunks: ["vendor", "commons", `runtime-${entryName.replace('/', '-')}`, entryName],
      minify: isProduction ? {
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      } : {},
    });
    res.push(plugin);
  }
  return res;
}

export { entry };
export default [...plugins, ...getHtmlWebpackPluginConfigs()];
