'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let currentSeparator = '';

    currentSeparator += separator;

    for (const element of this) {
      if (element !== undefined && element !== null) {
        str += element;
      }

      str += currentSeparator;
    }

    if (currentSeparator) {
      return str.slice(0, -currentSeparator.length);
    }

    return str;
  };
}

module.exports = applyCustomJoin;
