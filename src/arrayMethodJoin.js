'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const separatorString = String(separator);

    for (const elem of this) {
      if (elem === null || elem === undefined) {
        result += `${separatorString}`;
      } else {
        result += `${elem}${separatorString}`;
      }
    }

    if (separatorString.length) {
      result = result.slice(0, -separatorString.length);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
