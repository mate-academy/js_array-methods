'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let spliter = separator;

    if (spliter !== {}) {
      spliter += '';
    }

    for (let i of this) {
      if (i === null || i === undefined) {
        i = '';
      }

      result += i;

      if (spliter.length > 0) {
        result += spliter;
      }
    }

    if (spliter.length > 0) {
      return result.slice(0, -spliter.length);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
