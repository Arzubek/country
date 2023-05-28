const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  entry: {
    app: path.resolve(__dirname, "src", "app.js"),
    home: path.resolve(__dirname, "src/js", "home.js"),
    about: path.resolve(__dirname, "src/js", "about.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[name][contenthash][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/pages", "index.html"),
      filename: "index.html",
      chunks: ["app", "home"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/pages", "about.html"),
      filename: "about.html",
      chunks: ["app", "about"],
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        //IMAGE LOADER
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
      },
      {
        // HTML LOADER
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8080,
    open: true,
    hot: true,
  },
};
