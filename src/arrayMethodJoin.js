'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let currentSeparator;

    if (separator === undefined) {
      currentSeparator = ',';
    } else if (separator === null) {
      currentSeparator = 'null';
    } else {
      currentSeparator = separator.toString();
    }

    for (const element of this) {
      if (element === undefined || element === null) {
        str += currentSeparator;
      } else {
        str += element + currentSeparator;
      }
    }

    if (currentSeparator) {
      return str.slice(0, -currentSeparator.length);
    }

    return str;
  };
}

module.exports = applyCustomJoin;
