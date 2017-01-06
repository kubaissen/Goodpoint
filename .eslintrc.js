'use strict';
module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'sourceType': 'module',
    'browser': true,
    // 'browserity': true,
    'es6': true,
    'commonjs': true,
    'console': true
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'off'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-console': [
      'off'
    ]
  }
};