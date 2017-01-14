var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/client');



module.exports = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath:'/public/'
    }
    ,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
                //loaders: ["react-hot", 'babel-loader'],
                //query: {
                //    presets : ['es2015', 'react']
                //}
            }]
    }
};

