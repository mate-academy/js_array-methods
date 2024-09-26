'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (const element of this) {
      if (element === null || element === undefined) {
        string += String(separator);
      } else {
        string += String(element) + String(separator);
      }
    }

    const end = string.length - String(separator).length;

    return string.slice(0, end);
  };
}

module.exports = applyCustomJoin;
