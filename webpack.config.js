const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './resources/assets/js/main.jsx',
    output: {
        filename: './public/js/main.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                },
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
        ],
    },
};
