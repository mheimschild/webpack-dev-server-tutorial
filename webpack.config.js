var webpack = require("webpack");

module.exports = {
	context: __dirname + '/src',
	
	entry: {
		app: ["./app"]
	},
	
	module: {
		loaders: [
			{ test: /\.less$/, loader: "style!css!less" },
			{ test: /\.png$/, loader: "file?prefix=img/" }
		]
	},
	
	output: {
		filename: 'bundle.js',
		publicPath: './build/',
		path: __dirname + '/public/build'
	},
	
	plugins: [new webpack.HotModuleReplacementPlugin()]
};