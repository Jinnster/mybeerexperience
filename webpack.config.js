/**
 * Created by Jinhua on 22-6-2016.
 */

var webpack = require('webpack');

module.exports = {
    //entry: [
    //    'webpack/hot/only-dev-server',
    //    "./assets/js-output/app.js"
    //],

    entry: {
        html : "./index.html",
        script: "./assets/js-output/app.js"
    },

    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: "file?name=[name].[ext]"},
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]

};