const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/scripts/index.js",
  mode: "development",
  devServer: {
    static: "./dist",
    port: 3001,
    hot: true,
  },
  output: {
    filename: "main.js",
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new TerserWebpackPlugin(),
    new CssMinimizerPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/images/", to: "images" }],
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
