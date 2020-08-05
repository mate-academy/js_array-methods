'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let elem of this) {
      if (elem === null || elem === undefined) {
        elem = '';
      }

      if (separator === null) {
        result += 'null' + elem;
      } else {
        result += separator + elem;
      }
    }

    return result.slice(String(separator).length, result.length);
  };
}

module.exports = applyCustomJoin;
