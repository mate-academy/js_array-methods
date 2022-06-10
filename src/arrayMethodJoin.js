'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArr = '';

    for (const element of this) {
      if (element !== null && element !== undefined) {
        joinedArr += element;
      }

      joinedArr += separator;
    }

    const iOfLastSeparator = joinedArr.lastIndexOf(separator);

    return joinedArr.slice(0, iOfLastSeparator);
  };
}

module.exports = applyCustomJoin;
