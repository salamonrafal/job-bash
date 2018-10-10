const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
const webpack = require('webpack');

module.exports = merge(commonConfig, {
   mode: 'production',
   plugins: [
        new webpack.DefinePlugin({
            '__ENV__': JSON.stringify('production')
        })
    ]
});