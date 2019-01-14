var path = require("path");

module.exports = {
  entry: "./index",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}