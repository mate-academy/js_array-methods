'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const strSeparator = String(separator);
    let result = '';

    for (const str of this) {
      if (str === undefined || str === null) {
        result += strSeparator;
      } else {
        result += str + strSeparator;
      }
    }

    return result.slice(0, result.length - strSeparator.length);
  };
}

module.exports = applyCustomJoin;
