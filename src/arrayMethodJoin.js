'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultStr = '';
    let normalizedSeparator;

    if (separator === undefined) {
      normalizedSeparator = ',';
    } else {
      normalizedSeparator = String(separator);
    }

    for (let value of this) {
      if (value === null || value === undefined) {
        value = '';
      }

      resultStr += String(value) + normalizedSeparator;
    }

    if (normalizedSeparator === '') {
      return resultStr;
    }

    return resultStr.slice(0, -normalizedSeparator.length);
  };
}

module.exports = applyCustomJoin;
