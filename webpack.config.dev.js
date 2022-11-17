const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
	devtool: "inline-source-map", // Should not be used in production mode
	devServer: {
		contentBase: "./dist"
	},
	mode:"development",
});
