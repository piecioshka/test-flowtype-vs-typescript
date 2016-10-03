'use strict';

module.exports = {
    entry: './index.ts',

    output: {
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /(.*)\.ts/,
                loader: 'ts-loader'
            }
        ]
    }
};
