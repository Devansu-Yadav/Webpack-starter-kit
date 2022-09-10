const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const webpackConfig = {
    entry: path.resolve(__dirname, "src", "index.js"),
	
    output: {
		filename: "[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true
	},
    module: {
        rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset",
			},
		]
    },

	optimization: {
		splitChunks: {
			cacheGroups: {
				node_vendors: {
					name: "vendor",
					test: /[\\/]node_modules[\\/]/,
					chunks: "all",
					priority: 1
				}
			}
		}
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "vanillaJS app",
			template: path.resolve(__dirname, "src", "index.html")
		}),
		new ESLintPlugin({
			extensions: "js",
			exclude: "node_modules",
			files: "src"
		})
	],

	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist"
	},

	mode:"production",
};

module.exports = webpackConfig;