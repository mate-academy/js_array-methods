'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const string = `${separator}`;

    for (const word of this) {
      if (word === null || word === undefined) {
        result += string;
        continue;
      }

      result += word + string;
    }

    if (separator === '') {
      return result.slice(0, result.length);
    } else {
      return result.slice(0, result.length - string.length);
    }
  };
}

module.exports = applyCustomJoin;
