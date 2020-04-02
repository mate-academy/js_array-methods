'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let strSeparator = 0;

    if (separator === null) {
      strSeparator = 'null';
    } else if (separator === undefined) {
      strSeparator = ',';
    } else {
      strSeparator = separator.toString();
    }

    for (let elem of this) {
      if (elem === null || elem === undefined) {
        elem = '';
      }

      str += elem + strSeparator;
    }

    return str.slice(0, (str.length - strSeparator.length));
  };
}

module.exports = applyCustomJoin;
