'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (const item of this) {
      if (item !== null && item !== undefined) {
        str += item;
      }

      str += separator;
    }

    if (separator === '') {
      return str;
    }

    return str.slice(0, -(separator + '').length);
  };
}

module.exports = applyCustomJoin;
