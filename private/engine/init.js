'use strict';

// let cssReset = require('normalize.css');

// console.log(cssReset);

let goodPoint = (function() {
  let draw = require('./draw.js');
  let status = require('./test.es6');

  return {
    status: draw
  };

})();

module.exports = goodPoint.status;