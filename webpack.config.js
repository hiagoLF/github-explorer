const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  // Esse aqui é pra criar uma versão melhor de debugar no development
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  // Monitorar modificações nos arquivos e recarregar o webpack
  devServer: {
    static: path.resolve(__dirname, "public"),
    hot: true,
  },
  plugins: [
    // Plugin para não perder as informações quando uma página for recarregada quando em desenvolvimento
    isDevelopment && new ReactRefreshWebpackPlugin(),
    // Plugin para atualizar a página automaticamente quando salvar o código
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    // filter Boolean é um hack para evitar o false do isDevelopment
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
