'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';

    separator = String(separator);

    for (const str of this) {
      if (str === undefined || str === null) {
        resultStr += separator;
      } else {
        resultStr += str + separator;
      }
    }

    return resultStr.slice(0, resultStr.length - separator.length);
  };
}

module.exports = applyCustomJoin;
