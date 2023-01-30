const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
	//other rules
	resolve: {
		plugins: [
			new TsconfigPathsPlugin({
				// tsconfig.json はデフォルト
				configFile: 'tsconfig.json',
			}),
		],
	},
};
