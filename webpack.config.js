const webpack = require('webpack');

module.exports = {
    entry: [
        './src/app.js'
    ],

    output: {
        path      : __dirname + '/public',
        publicPath: '/',
        filename  : 'bundle.js'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(bower_components|node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test  : /\.css$/,
                loader: 'style-loader!css-loader?-url'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js']
    },

    devServer: {
        contentBase: './public',
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.DedupePlugin()
    ]
};