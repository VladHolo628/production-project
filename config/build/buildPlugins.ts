import { WebpackPluginInstance } from "webpack";
import webpack from "webpack";
import htmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new htmlWebpackPlugin({
      template: paths.htmlTemplate,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash:8].css",
      chunkFilename: "css/chunk[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];

  if (isDev) {
    plugins.push(
      new ReactRefreshWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin()
    );
  }
  return plugins;
}
