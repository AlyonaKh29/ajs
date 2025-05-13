const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist/index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ajs', 
    libraryTarget: 'umd', 
    globalObject: 'this', 
  },
  mode: 'production', 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
