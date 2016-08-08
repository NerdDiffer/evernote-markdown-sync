const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'client', 'src');
const DIST_DIR = path.join(__dirname, 'client', 'dist');

const config = {
  devtool: 'inline-sourcemap',
  resolve: {
    modulesDirectories: ['node_modules', 'components'],
    extensions: ['', '.js', '.jsx']
  },
  entry: path.join(SRC_DIR, 'index.jsx'),
  output: {
    path: DIST_DIR,
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};

module.exports = config;
