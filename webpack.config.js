'use strict';
module.exports = {
  entry: './private/index.js',
  output: {
    path: './public/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      // the 'transform-runtime' plugin tells babel to require the runtime
      // instead of inlining it.
      {
        test: /\.es6$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};