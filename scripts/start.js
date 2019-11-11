import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import webpackConfig from "../build/webpack.config.babel";
import webpackDevServerConfig from "../build/webpackDevServer.config.babel";
import { PORT } from "../build/env";

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, webpackDevServerConfig);

server.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!\n`);
});

["SIGINT", "SIGTERM"].forEach(function (sig) {
  process.on(sig, function () {
    server.close();
    process.exit();
  });
});