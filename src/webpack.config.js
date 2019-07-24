const path = require('path');

module.exports = {
  mode: 'none',
  target: 'node',
  externals: [/node_modules/],
  resolve: {extensions: ['.ts', '.js']},
  entry: {
    server: path.join(__dirname, 'server.ts')
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js'
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: 'ts-loader?configFile=tsconfig.server.json'},
    ]
  },
  node: {
    __dirname: false,
  }
};
