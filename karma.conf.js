var webpackConfig = require('./webpack.karma.config');
webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine', 'dojo'],

    files: [{
      pattern: 'karma-test-shim.js',
      included: false
    },
      'test-main.js'
    ],

    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
      // stats: {
      //   colors: true
      // }
    },

    webpackServer: {
      noInfo: true
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    //logLevel: config.LOG_DEBUG,
    logLevel: config.LOG_INFO,

    reporters: ['progress'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    //browsers: ['PhantomJS'],
    singleRun: false,

    browserNoActivityTimeout: 100000
  };

  config.set(_config);
};