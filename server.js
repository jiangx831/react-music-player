'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  stats: {
    colors: true
  }
});

server.listen(3000, 'localhost', (err) => {
  if(err) {
    console.log(err);
  }
  console.log('Starting server on http://localhost:3000');
});