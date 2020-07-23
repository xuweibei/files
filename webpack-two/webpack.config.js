const path = require('path');

const HtmlWebpackPluin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'haha.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react']
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.webp$/,
				loader: 'file-loader'
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		open: true
	},
	plugins: [
		new HtmlWebpackPluin({
			filename: 'lala.html',
			template: './src/index.html'
		}),
		new CleanWebpackPlugin()
	],
	mode: 'development'
}