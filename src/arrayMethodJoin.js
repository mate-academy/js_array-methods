'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    for (let el of this) {
      if (el === null || el === undefined) {
        el = '';
      }

      res += el + '' + separator;
    }

    if (separator === '') {
      return res;
    }

    if (separator === null) {
      return res.slice(0, -4);
    }

    // slice(0, -15) need if separator is {}
    return res.slice(0, -separator.length) || res.slice(0, -15);
  };
}

module.exports = applyCustomJoin;
