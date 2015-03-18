'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    files: [
      'src/**/*.js',
    ],

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-coverage',
        'karma-junit-reporter',
        'karma-chrome-launcher',
        'karma-ng-html2js-preprocessor'
    ],

    reporters: ['progress', 'coverage','junit'],

    preprocessors: {
      'src/**/!(*spec.js)': ['coverage'],
      'src/{app,components}/**/*.html' : ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix : 'src/'
      //stripSufix  : '.html'
    },

    junitReporter: {
      outputFile: 'coverage/test-results.xml',
      suite: ''
    },

    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/',
      file: 'report-lcov.lcov'
    }

    //  list of files / patterns to exclude
    //exclude: [
    //  'src/config/init.js',
    //  'resources/i10n/pt-BR.json'
    //],

  });
};
