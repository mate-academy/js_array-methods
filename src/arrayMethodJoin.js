'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (const i of this) {
      if (i === null || i === undefined) {
        resultString += String(separator);
      } else {
        resultString += String(i) + String(separator);
      }
    }

    return resultString.slice(
      0, resultString.length - String(separator).length);
  };
}

module.exports = applyCustomJoin;
