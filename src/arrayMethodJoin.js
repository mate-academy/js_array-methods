'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    const clearedArray = this
      .map((value) => value === undefined || value === null ? '' : value);

    if (clearedArray.length === 0) {
      return str;
    } else {
      for (let i = 0; i < clearedArray.length; i++) {
        if (i === clearedArray.length - 1 || clearedArray.length === 1) {
          str += clearedArray[i];
        } else {
          str += clearedArray[i].toString() + separator;
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
