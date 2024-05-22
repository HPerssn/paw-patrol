const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  devServer: {
    contentBase: path.join(__dirname, "src"),
    publicPath: "/src/",
    port: 5500,
  },
};
