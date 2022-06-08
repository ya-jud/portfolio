import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { VueLoaderPlugin } from 'vue-loader';

const mode = 'development';
if(process.env.NODE_ENV === 'production') {
  mode = 'production'
};

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html'
  }),
  new MiniCssExtractPlugin(),
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  }),
];

const output = {
  path: path.resolve(process.cwd(), 'dist'),
  publicPath: '/',
};

const resolve = {
  extensions: ['.ts', '.js', '.tsx', '.vue'],
  modules: [path.join(process.cwd(), 'src'), 'node_modules'],
};

const module = {
  rules: [
    { test: /\.(vue)$/, use: ['vue-loader'] },
    { test: /\.(css)$/, use: [MiniCssExtractPlugin.loader, 'vue-style-loader', 'css-loader'] },
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      include: /src/,
      loader: "ts-loader",
      options: {
        transpileOnly: true,
        appendTsSuffixTo: [/\.vue$/]
      }
    },
    { 
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader', 
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              indentedSyntax: true
            }
          }
        }
      ] 
    }
  ],
};

const config = {
  mode,
  entry: ['./src/index.ts'],
  plugins,
  output,
  resolve,
  module,
  devtool: 'source-map',
  devServer: {
    hot: true
  },
};

export default config;