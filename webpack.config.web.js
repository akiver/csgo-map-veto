import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import BabiliPlugin from 'babili-webpack-plugin'
import webpack from 'webpack'

export default {
    devtool: 'cheap-module-source-map',

    entry: ['babel-polyfill', './app/index'],

    output: {
        path: path.join(__dirname, 'web'),
        filename: 'bundle.js',
    },

    resolve: {
        extensions: ['.js', '.json'],
        modules: [
            path.join(__dirname, 'app'),
            'node_modules',
        ],
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
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
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
                use: 'url-loader',
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.NamedModulesPlugin(),
        new BabiliPlugin(),
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            filename: '../web/index.html',
            template: 'app/index-web.html',
            inject: false
        })
    ],
}