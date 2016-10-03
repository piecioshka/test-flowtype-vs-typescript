'use strict';

module.exports = {
    entry: './index.ts',

    output: {
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            {
                test: /(.*)\.ts/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    }
};
