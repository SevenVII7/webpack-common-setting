var path = require('path')

module.exports = {
  mode: 'development',
  entry: ['./src/main'], // 在 index 檔案後的 .js 副檔名是可選的
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[hash].js'
  }
}