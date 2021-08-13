const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: path.resolve(__dirname,'..','./index.js'),
    output: {
        path: path.resolve(__dirname,'..','./build'),
        filename: "bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".js"]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'..','./public/index.html')
        })
    ]
}