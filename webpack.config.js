const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = (process.env.NODE_ENV || 'development').trim();
const isProduction = NODE_ENV === 'production';
const isDevelopment = !isProduction;

var config = {
    context: path.join(__dirname, 'src'),
    entry: {
        bundle: './'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'build'),
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
//     resolveLoader: {
//       modules: ['node_modules']
//     },

    watch: !isProduction,
    watchOptions: {
        aggregateTimeout: 150
    },

    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',

    plugins: [
        // не дает перезаписать скрипты при наличии в них ошибок
        new webpack.NoEmitOnErrorsPlugin(),

        // минимизирует id, которые используются webpack для подгрузки чанков и прочего
        new webpack.optimize.OccurrenceOrderPlugin(),

        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(NODE_ENV),
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        }),

        // выделение общего кода из точек входа
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            // filename: 'vendor-[hash].js',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            },
        }),

        new ExtractTextPlugin({
          filename: '[name].[contenthash].css',
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
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            mangle: { screw_ie8 : true },
            compress: {
                screw_ie8: true,
                sequences : true,
                booleans : true,
                loops : true,
                unused : true,
                warnings : false,
                drop_console: true,
                unsafe : true
            }
        })
    ] : []),

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: [/node_modules/, /build/]
            },
            {
                test: /\.css$/,
                exclude: [/build/],
                use:
                    !isProduction
                        ? ['style-loader', 'css-loader', 'postcss-loader']
                        : ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use: ['css-loader', 'postcss-loader']
                        })
            }
        ]
    },

    devServer: {
        host: 'localhost',
        port: '9000',
        contentBase: [
            path.join(__dirname, 'build')
        ],
        historyApiFallback: true
    }
};

// массив для мульти-компиляции
module.exports = [config];
