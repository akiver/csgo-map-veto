import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import {spawn} from 'child_process'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import baseConfig from './webpack.config.base'

const port = process.env.PORT || 4000
const publicPath = `http://localhost:${port}/dist`

export default merge(baseConfig, {
    devtool: 'inline-source-map',

    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${port}/`,
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'app/index.js'),
    ],

    output: {
        publicPath: `http://localhost:${port}/dist/`
    },

    module: {
        rules: [
            {
                test: /\app\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    }
                ]
            },
            {
                test: /\app.sass$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
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
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ],

    target: 'electron-renderer',

    devServer: {
        port,
        publicPath,
        compress: true,
        noInfo: true,
        stats: 'errors-only',
        inline: true,
        lazy: false,
        hot: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        contentBase: path.join(__dirname, 'dist'),
        watchOptions: {
            aggregateTimeout: 300,
            poll: 100
        },
        historyApiFallback: {
            verbose: true,
            disableDotRule: false,
        },
        setup() {
            if (process.env.START_HOT) {
                spawn(
                    'npm',
                    ['run', 'start-hot-renderer'],
                    {shell: true, env: process.env, stdio: 'inherit'}
                )
                    .on('close', code => process.exit(code))
                    .on('error', spawnError => console.error(spawnError))
            }
        }
    },
})