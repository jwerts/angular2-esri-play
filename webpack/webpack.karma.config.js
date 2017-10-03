var path = require('path');
var webpack = require("webpack");

// Helper functions
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
  devtool: 'source-map',
  output: {
    path: "/",
    libraryTarget: "amd"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json']
  },
  module: {
    rules: [
      // typescript
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      // css
      {
        test: /\.css$/,
        use: ["to-string-loader", "css-loader"]
      },
      // html
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      // images
      {
        test: /\.(jpe?g|gif|png)$/,
        use: 'file-loader?emitFile=false&name=[path][name].[ext]'
      }
    ]
  },
  plugins: [
    // https://github.com/angular/angular/issues/11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      root('./app') // location of your src
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
        console.log(context + ": " + request);
        return callback(null, "amd " + request);
      }
      callback();
    }
  ]
};