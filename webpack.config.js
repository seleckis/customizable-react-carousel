var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'./example/src/index.jsx'
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'eslint!babel'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		modulesDirectories: ['node_modules']
	},
	output: {
		path: __dirname + '/example/dist/',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin()
	],
};
