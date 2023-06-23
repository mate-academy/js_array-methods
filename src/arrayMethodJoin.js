'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const sourceStr = [...this].toString();
    let result = '';

    for (let i = 0; i < sourceStr.length; i++) {
      if (sourceStr[i] === ',') {
        result += separator;
      } else if (separator === undefined) {
        return sourceStr;
      } else {
        result += sourceStr[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
