const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
});

module.exports = {
  mode: 'development',
  entry: './mian.js',
  output: { path: path.resolve(__dirname, 'dist') },
  plugins: [HtmlPlugin],
  module: {
    rules: [
      {
        test: /\.js|jsx/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.less|.css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.jepg|jpg|svg|png/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ],
  },
};
