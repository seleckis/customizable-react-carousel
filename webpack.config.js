var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'example');

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: '/js/bundle.js'
  },
  module: {
    loaders: [
	    {
	      test: /\.jsx?/,
	      exclude: /node_modules/,
	      loader: 'babel'
	    },
	    {
	      test: /\.json/,
	      exclude: /node_modules/,
	      loader: 'json'
	    },
	  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};

module.exports = config;
