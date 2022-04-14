'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let separators = separator;

    if (separator === undefined) {
      separators = ',';
    }

    let result = '';
    const str = String(separators);
    const cut = str.length;

    for (let i of this) {
      if (i === undefined || i === null) {
        i = '';
      }
      result += i + str;
    }

    if (cut === 0) {
      return (result);
    }

    return result.slice(0, -cut);
  };
}

module.exports = applyCustomJoin;
