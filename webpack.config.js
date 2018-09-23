let path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, 'src/index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        noParse: /jquery|lodash/,
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    'awesome-typescript-loader'
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            styles: path.resolve(__dirname, 'src/styles/'),
            views: path.resolve(__dirname, 'src/views/'),
            services: path.resolve(__dirname, 'src/services/'),
            helpers: path.resolve(__dirname, 'src/helpers/'),
            interfaces: path.resolve(__dirname, 'src/interfaces/'),
            config: path.resolve(__dirname, 'src/config/')
        }
    }

};