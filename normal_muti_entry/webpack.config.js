const path = require('path')
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: {
    // 雙模塊 index & about, 不同進入點
    index: "./src/index",
		about: "./src/about"
  }, // 在 index 檔案後的 .js 副檔名是可選的
  output: {
    path: path.join(__dirname, 'dist'),
    asyncChunks: true,
    filename: '[name].[hash].js',
    chunkFilename: '[hash].js',
    assetModuleFilename: '[name].[hash][ext]'
  },
  // 給 webpack-dev-server 吃的
  devServer: {
    static: path.join(__dirname, 'dist'),
    hot: true,
  },
  module: {
    rules: [
      // webpack5 圖片打包
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext]'
        }
      },
      // ~ webpack4 圖片打包
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loader:'file-loader',
      //   options: {
      //     name: '[name].[hash].[ext]',
      //     outputPath: 'images',
      //   },
      // },
      {
        test: /\.txt/i,
        type: 'asset/source',
        generator: {
          filename: 'assets/[hash][ext]'
        }
      },
      // 解析 scss, sass, css 打包
      {
        test: /\.s[ac]ss$/i,
        // MiniCssExtractPlugin 用來生成 css 並在 html 中引入
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        // style-loader 可以將用到的 css 設定, 用 js 方式插入 <style> 中
        // use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // 解析 html 裡面的東西
      {
        test: /\.html$/i,
        loader: 'html-loader',
        // options: {
        //   esModule: false // 用 file-loader 解析 html 裡的圖片要用設定這個
        // },
      },
    ]
  },
  plugins: [
    // Plugin for HMR
    new webpack.HotModuleReplacementPlugin(),
    // css
    new MiniCssExtractPlugin({
      filename: './css/[name].[hash].css'
    }),
    // html
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './public/about.html',
      filename: 'about.html',
      chunks: ['about']
    }),
  ],
}