var gulp = require("gulp");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var WebpackDevServer = require("webpack-dev-server");

gulp.task("webpackDevServer", function() {
  webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:3002", "webpack/hot/dev-server");
  var compiler = webpack(webpackConfig);
  var server = new WebpackDevServer(compiler, {
    contentBase: './public/',
    publicPath: '/build/',
    hot: true,
    debug: true,
    quiet: false,
    noInfo: false,
    stats: {
      colors: true
    }
  }).listen(3002, function(err) {});
});
