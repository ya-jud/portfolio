import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

let mode = 'development';
if(process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
  new MiniCssExtractPlugin(),
];

const config = {
  mode,
  plugins,
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(path.join(process.cwd()), 'dist'),
    clean: true,
  },
  resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      modules: [path.join(process.cwd(), 'src'), 'node_modules'],
      alias: {
        react: path.join(process.cwd(), 'node_modules', 'react'),
      },
  },
  module: {
    rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
			{
				test: /\.(svg|png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					outputPath: 'images',
					name(resourcePath, resourceQuery) {
						if (process.env.NODE_ENV === 'development') {
							return '[path][name].[ext]';
						}
						return '[contenthash].[ext]';
					},
				},
			},
    ]
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
  },
};

export default config;