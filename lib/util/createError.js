'use strict';

var mout = require('mout');

module.exports = function(msg, code, props) {
  var error = new Error(msg);
  error.code = code;
  if (props) {
    mout.object.mixIn(error, props);
  }
  return error;
}
