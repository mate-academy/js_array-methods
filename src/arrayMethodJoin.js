'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    const stringSeparator = String(separator);

    for (let item of this) {
      if (item === null || typeof item === 'undefined') {
        item = '';
      }

      string += stringSeparator + item;
    }

    return string.slice(-string.length + stringSeparator.length);
  };
}

module.exports = applyCustomJoin;
