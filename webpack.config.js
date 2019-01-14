var path = require("path");

module.exports = {
  entry: "./velocity",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "velocity.min.js",
    library: ["Velocity"],
    libraryTarget: "var"
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