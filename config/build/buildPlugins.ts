import { WebpackPluginInstance } from "webpack";
import webpack from "webpack";
import htmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new htmlWebpackPlugin({
      template: paths.htmlTemplate,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash:8].css",
      chunkFilename: "css/chunk[name].[contenthash:8].css",
    }),
  ];
}
