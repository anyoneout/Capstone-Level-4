import { Configuration } from "webpack";

export default {
  module: {
    rules: [
      {
        test: /\.(js|ts)/,
        exclude: /.(json)/, // Don't compile json files with babel-loader
        use: "babel-loader",
      },
    ],
  },
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts"], // automatically inserts file extensions in import statements.
  },
  target: "node",
  externals: ["@xenova/transformers"], // don't bundle these packages
  externalsType: "commonjs-module",
} as Configuration;
