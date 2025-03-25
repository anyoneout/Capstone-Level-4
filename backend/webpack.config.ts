import Dotenv from "dotenv-webpack";
import { Configuration } from "webpack";

export default {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|mp4)/,
        type: "asset/resource",
      },
    ],
  },
  mode: "development",
  target: "node",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".mp4", ".png"],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ],
} as Configuration;
