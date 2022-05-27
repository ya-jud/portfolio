const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
if(process.env.NODE_ENV === 'production') {
    mode = 'production';
}

const plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.html',
    }),
];

module.exports = {
    mode,
    plugins,
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            { test: /\.(html)$/, use: ['html-loader'] },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['@babel/env', '@babel/preset-react']
                    }
                }, 
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
    },
};