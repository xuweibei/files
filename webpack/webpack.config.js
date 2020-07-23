const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
	entry: './page/react.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main1.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ["react"]
					}
				}]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: '哈哈哈',
			filename: 'lalla.html',
			template: './page/index.html'
		}),
		// new CleanWebpackPlugin()
	],
	devServer: {
		contentBase: path.join(__dirname, 'page'),
		open: true
	},
	mode: 'development'
}