import path from 'path'
import webpack from 'webpack'
import { dependencies as externals } from './package.json'

export default {
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            }
        }]
    },

    output: {
        path: path.join(__dirname, 'app'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },

    resolve: {
        extensions: ['.js', '.json'],
        modules: [
            path.join(__dirname, 'app'),
            'node_modules',
        ],
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
    ],

    externals: Object.keys(externals || {})
}