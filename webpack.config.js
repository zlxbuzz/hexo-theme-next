var basePath = __dirname + "/source/js";

module.exports = {
  context: basePath,
  entry: "./main",
  output: {
    path: basePath,
    filename: "main.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
