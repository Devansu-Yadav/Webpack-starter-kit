const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const pkg = require("./package.json");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
	
    resolve: {
		alias: {
		  components: path.resolve(__dirname, 'src/components'),
		},
		extensions: ['.js', '.jsx'],
	},
    
    output: {
		filename: "[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true
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
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: pkg.analyze ? "server" : "disabled",
			openAnalyzer: pkg.analyze ? true : false,
			generateStatsFile: pkg.analyze ? true : false,
			excludeAssets: null,
		}),
	],

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
				test: /\.(js)x?$/,
				include: path.resolve(__dirname, "src"),
				exclude: /node_modules/,
				use: [
				{
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-react", { "runtime": "automatic" }]]
					}
				},
				],
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
};