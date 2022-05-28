import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let mode = 'development';
if(process.env.NODE_ENV === 'production') {
    mode = 'production';
}

const plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.html',
    }),
];

const config = {
    mode,
    plugins,
    entry: "./src/main.js",
    output: {
        path: path.resolve(path.join(process.cwd()), 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.join(process.cwd(), 'src'), 'node_modules'],
        alias: {
            react: path.join(process.cwd(), 'node_modules', 'react'),
        },
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

export default config;