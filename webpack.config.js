module.exports = {
  mode: "development",
  entry: {
    left: './left.js',
    right: './right.js'
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  }
};
