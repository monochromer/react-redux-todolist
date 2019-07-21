const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const NODE_ENV = (process.env.NODE_ENV || 'development').trim();
const isProduction = NODE_ENV === 'production';
const isDevelopment = !isProduction;

var config = {
    mode: NODE_ENV,
    context: path.join(__dirname, 'src'),
    entry: {
        bundle: './'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: ''
    },

    resolve: {
        modules: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'src', 'containers'),
          path.join(__dirname, 'src', 'components'),
          'node_modules'
        ],
        extensions: ['.js', '.jsx', '.tsx']
    },
    resolveLoader: {
      modules: ['node_modules']
    },

    watch: !isProduction,
    watchOptions: {
        aggregateTimeout: 150
    },

    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',

    optimization: {
        minimize: isProduction,
        noEmitOnErrors: true,
        splitChunks: {
            chunks: 'all'
        }
    },

    plugins: [
        // не дает перезаписать скрипты при наличии в них ошибок
        // new webpack.NoEmitOnErrorsPlugin(),

        // минимизирует id, которые используются webpack для подгрузки чанков и прочего
        // new webpack.optimize.OccurrenceOrderPlugin(),

        // new webpack.HashedModuleIdsPlugin(),

        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(NODE_ENV),
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        }),

        new ExtractTextPlugin({
          filename: '[name].[hash].css',
          disable: !isProduction,
          allChunks: true
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'html/index.html',
            minify: {
                collapseWhitespace : false
            }
        })
    ].concat(isProduction ? [
        new ManifestPlugin(),

        // new webpack.optimize.ModuleConcatenationPlugin()
    ] : []),

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                exclude: [/public/],
                use:
                    !isProduction
                        ? [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: true
                                }
                            },
                            'postcss-loader'
                        ]
                        : ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use: ['css-loader', 'postcss-loader']
                        })
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader',
                options: {
                    // Inline files smaller than 10 kB (10240 bytes)
                    limit: 10 * 1024,
                },
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
                options: {
                    // Inline files smaller than 10 kB (10240 bytes)
                    limit: 10 * 1024,
                    // Remove the quotes from the url
                    // (they’re unnecessary in most cases)
                    noquotes: true,
                },
            },
            // compresses images
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'image-webpack-loader',
                // This will apply the loader before the other ones
                enforce: 'pre',
            },
        ]
    },

    devServer: {
        host: 'localhost',
        port: '9000',
        contentBase: [
            path.join(__dirname, 'public')
        ],
        historyApiFallback: true
    }
};

// массив для мульти-компиляции
module.exports = [config];
