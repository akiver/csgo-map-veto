import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import BabiliPlugin from 'babili-webpack-plugin'
import baseConfig from './webpack.config.base'

export default merge(baseConfig, {
    devtool: 'cheap-module-source-map',

    entry: ['babel-polyfill', './app/index'],

    output: {
        path: path.join(__dirname, 'app/dist'),
        publicPath: '../dist/'
    },

    module: {
        rules: [
            {
                test: /\app\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader',
                })
            },
            {
                test: /\app\.sass$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                    fallback: 'style-loader',
                })
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'image/svg+xml',
                    }
                }
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
                use: 'url-loader',
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new BabiliPlugin(),
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            filename: '../../index.html',
            template: 'app/index.html',
            inject: false
        })
    ],

    target: 'electron-renderer'
})