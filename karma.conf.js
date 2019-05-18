const os = require('os')
const path = require('path')
module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'karma-typescript'],
    files: [
      { pattern: 'node_modules/expect.js/index.js' },
      { pattern: 'src/**/*.ts' }
    ],
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },
    reporters: ['dots', 'karma-typescript'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
    karmaTypescriptConfig: {
      reports: {
        cobertura: {
          directory: 'coverage',
          filename: 'coverage.xml',
          subdirectory: '.'
        },
        lcovonly: {
          directory: 'coverage',
          filename: 'lcov.info',
          subdirectory: '.'
        },
        json: {
          directory: 'coverage',
          filename: 'coverage-final.json',
          subdirectory: '.'
        },
        html: 'coverage',
        'text-summary': ''
      }
    }
  })
}