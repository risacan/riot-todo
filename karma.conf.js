module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'riot'],
    files: [
      '**/*.tag',
      'test/**/*-spec.js'
    ],
    exclude: [
      "node_modules/**/*.tag"
    ],
    preprocessors: {
      '**/*.tag.html': ['riot']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true
  });
};
