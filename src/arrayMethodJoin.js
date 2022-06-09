'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArr = '';

    for (const element of this) {
      if (typeof element === 'number'
        || typeof element === 'string'
        || typeof element === 'boolean') {
        joinedArr += element;
      }

      joinedArr += separator;
    }

    const lastSeparator = joinedArr.lastIndexOf(separator);

    return joinedArr.slice(0, lastSeparator);
  };
}

module.exports = applyCustomJoin;
