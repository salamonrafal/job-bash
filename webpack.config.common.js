const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, 'src/index.tsx')
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
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "styled-components": "styled",
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.ttf'],
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            styles: path.resolve(__dirname, 'src/styles/'),
            views: path.resolve(__dirname, 'src/views/'),
            services: path.resolve(__dirname, 'src/services/'),
            helpers: path.resolve(__dirname, 'src/helpers/'),
            interfaces: path.resolve(__dirname, 'src/interfaces/'),
            containers: path.resolve(__dirname, 'src/containers/'),
            theme: path.resolve(__dirname, 'src/theme/'),
            resources: path.resolve(__dirname, 'src/resources/'),
            data: path.resolve(__dirname, 'src/data/'),
            config: path.resolve(__dirname, 'src/config/')
        }
    }

};