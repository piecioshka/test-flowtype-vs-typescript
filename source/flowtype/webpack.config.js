'use strict';

module.exports = {
    entry: './index.js',

    output: {
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            {
                test: /^(.*)\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
