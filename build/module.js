import {
  appPath,
  isDevelopment,
  isProduction,
  shouldUseSourceMap
} from "./env";
import path from 'path';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import PostCssPresetEnv from "postcss-preset-env";
import PostcssFlexBugsfixes from "postcss-flexbugs-fixes";
import friendlyFormatter from "eslint-friendly-formatter"

const postCssLoaderConfig = {
  loader: "postcss-loader",
  options: {
    ident: 'postcss',
    plugins: () => [
      PostcssFlexBugsfixes,
      PostCssPresetEnv({
        autoprefixer: {
          flexbox: 'no-2009',
          overrideBrowserslist: [
            "last 100 version"
          ]
        },
        stage: 3,
      })
    ],
    sourceMap: isProduction && shouldUseSourceMap,
  },
}

export default {
  rules: [
    {
      test: /\.vue$/,
      use: [{
        loader: 'vue-loader'
        }
      ],
      include: appPath
    },
    {
      test: /\.vue$/,
      use: [{
          loader: path.join(process.cwd(), "./build/loaders/jsPx2RemLoader.js"),
          options: {
            remUnit: 75
          }
        }
      ],
      include: path.join(process.cwd(),`./src/pages/mobile/`)
    },
    {
      test: /\.vue$/,
      use: [{
          loader: path.join(process.cwd(), "./build/loaders/jsPx2RemLoader.js"),
          options: {
            remUnit: 192
          }
        }
      ],
      include: path.join(process.cwd(),`./src/pages/pc/`)
    },
    {
      enforce: "pre",
      test: /\.js$/,
      include: appPath,
      use: [{
        loader: "eslint-loader",
        options: {
          formatter: friendlyFormatter
        }
      }],
      
    }, {
      test: /\.js$/,
      include: appPath,
      use: [{
        loader: "babel-loader"
      }
    ]
    }, {
      test: /\.css$/,
      use: [
        isDevelopment && "style-loader",
        isProduction && {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: "../"
          }
        },
        "css-loader",
        postCssLoaderConfig
      ].filter(Boolean)
    }, {
      test: /\.less$/,
      include: appPath,
      use: [
        isDevelopment && "style-loader",
        isProduction && {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: "../"
          }
        },
        "css-loader",
        postCssLoaderConfig,
        {
          loader: "less-loader",
          options: {
           modifyVars: {
             'primary-color': '#1DA57A',
             'link-color': '#1DA57A',
             'border-radius-base': '2px',
           },
           javascriptEnabled: true,
         },
        },
      ].filter(Boolean)
    }, {
      test: /\.(png\jpe?g|gif)$/,
      use: [
        {
          loader: "file-loader"
        }
      ]
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [{
        loader: "url-loader",
        options: {
          limit: 5 * 1024,
          outputPath: "images",
          name: "[name].[hash:7].[ext]"
        }
      }]
    }, 
    {
      test: /\.html$/,
      use: ["html-withimg-loader"]
    },
    {
      test: /\.html$/,
      use: {
          loader: 'html-loader',
          options: {
              attrs: ['img:src', 'img:data-src', 'audio:src'],
              minimize: true
          }
      }
    },
    {
      test: /\.json$/,
      type: 'javascript/auto',
      use: {
        loader: 'json-loader',
        options: {
          limit: 5 * 1024,
          outputPath: "json",
          name: '[name].[hash:7].[ext]'
        }
      }
    },
    {
      test: /\.(wav|ogg|mp3|mp4)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 5 * 1024,
          outputPath: "audio",
          name: '[name].[hash:7].[ext]'
        }
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 5 * 1024,
          outputPath: "fonts",
          name: '[name].[hash:7].[ext]'
        }
      }
    }
  ]
}