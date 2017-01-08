var path = require('path');
var webpack = require("webpack");

// Helper functions
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
  entry: {},
  output: {
    filename: './dist/[name].bundle.js',
    publicPath: './',
    libraryTarget: "amd"
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', 'json']
  },
  module: {
    loaders: [
      // typescript
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      // json
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      // html
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // css
      {
        test: /\.css$/,
        loaders: ["to-string-loader", "css-loader"]
      },
    ]
  },
  plugins: [
    // https://github.com/angular/angular/issues/11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      root('./src') // location of your src
    ),

    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
  ],
  externals: [
    function (context, request, callback) {
      if (/^dojo/.test(request) ||
        /^dojox/.test(request) ||
        /^dijit/.test(request) ||
        /^esri/.test(request)
      ) {
        return callback(null, "amd " + request);
      }
      callback();
    }
  ],
  devtool: 'source-map'
};
