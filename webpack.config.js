const path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {loader: 'babel-loader'},
        ],
      },
      {
        test: /\.ts$/,
        use: [
          {loader: 'babel-loader'},
          {loader: 'ts-loader'},
        ],
      },
    ],
  },
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
    ],
  },
};
