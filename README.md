# Webpack-starter-kit

A starter kit that you can use to create a project using ES6 full features (including module export/import) with React, Caching, Code Splitting & running ESlint checks.

The tool kit provides the following features:

 - Compilation of ES6 into ES5
 - loaders
 - css asset
 - inline asset
 - webpack plugin
 - Code Splitting
 - Caching
 - Webpack dev server
 - Run ESlint checks
 - Lazy Loading
 - Bundle Analyzer

## Installation

1. `git clone https://github.com/Devansu-Yadav/Webpack-starter-kit.git`
2. `cd Webpack-starter-kit`
3. Run `npm install`

You can also use the following command to get this template - `degit https://github.com/Devansu-Yadav/Webpack-starter-kit`

## How does the toolkit implement caching?

The toolkit provides out of the box caching functionalities which are implemented in the following two ways:

1. Using `[contenthash]` to cache bundle files
2. Extracting & caching non-changing third party libraries into vendor bundles

### Caching using `[contenthash]`

- Webpack provides a way to use [filename substitutions](https://webpack.js.org/guides/caching/#output-filenames) to insert hashes of the file content using `[contenthash]` in the filename to cache files that don't change after a build of your app. This is leveraged in the toolkit to cache bundles by default and this behavior can be changed by updating the [`webpack.config.common.js`](https://github.com/Devansu-Yadav/Webpack-starter-kit/blob/development/webpack.config.common.js#L18) file.

### Extracting & caching third party libraries

- By default, the toolkit splits and extracts third party `npm` libraries into `vendor` chunks as these are less likely to change than the source code of your app. This is done using the `cacheGroups` option of the [`SplitChunksPlugin`](https://webpack.js.org/plugins/split-chunks-plugin/) in [`webpack.config.common.js`](https://github.com/Devansu-Yadav/Webpack-starter-kit/blob/development/webpack.config.common.js#L77)

## Running on development using dev server

- Run `npm start` to start Webpack dev server.
- To build and generate files in the development mode, run the following command after local setup: `npm run build-dev`.
- This generates the build files within `./dist` folder but they will not be minified.

## For production

- Run `npm run build` to build all the project assets in the `dist` folder.
- This generates the build files within `./dist` folder and they will be minified.
