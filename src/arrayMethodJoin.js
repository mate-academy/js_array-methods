'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let key of this) {
      if (key === null || key === undefined) {
        key = '';
      }

      if (separator === null) {
        result += 'null' + key;
      } else {
        result += separator + key;
      }
    }

    return result.slice(String(separator).length, result.length);
  };
}

module.exports = applyCustomJoin;
