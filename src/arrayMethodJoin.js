'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const result = String(this);

    if (separator === '') {
      return result.replace(/,/g, '');
    } else if (separator) {
      return result.replace(/,/g, separator);
    } else if (separator === undefined) {
      return result;
    } else if (separator == null) {
      return result.replace(/,/g, 'null');
    }
  };
}

module.exports = applyCustomJoin;
