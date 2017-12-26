var path = require('path');
module.exports = {
    entry: './src/App.jsx',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                include: [path.resolve(__dirname, "src")],
                test: /\.jsx?$/,
                query: {
                    presets: ['es2015', 'stage-2', 'react'],
                }
            },
        ]
    }
}


