module.exports = (env) => {
  entry: './public/index,js',


  module: {
    rules: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'css-loader'
    }]
  }
}