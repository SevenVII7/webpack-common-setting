const path = require('path')
const webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['./src/main'], // 在 index 檔案後的 .js 副檔名是可選的
  output: {
    path: path.join(__dirname, 'dist'),
    asyncChunks: true,
    filename: '[name]_[hash].js',
    chunkFilename: 'chunk_[hash].js',
    assetModuleFilename: '[name]_[hash]'
  },
  devServer: {
    static: './dist',
    hot: true,
  },
  plugins: [
    // Plugin for hot module replacement
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
}