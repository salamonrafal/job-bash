const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
const path = require('path');


module.exports = merge(commonConfig, {
   mode: 'development',
   devtool: 'inline-source-map',
   output: {
      path: path.resolve(__dirname, 'example/dist'),
      filename: '[name].bundle.js'
   },
   devServer: {
      contentBase: path.join(__dirname, 'example'),
      compress: true,
      port: 8080,
      host: '127.0.0.1',
      open: true
   }
});