'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArr = '';
    let pseudoSeparator = separator;

    if (separator === null) {
      pseudoSeparator = 'null';
    }

    for (const n of this) {
      let item = n + '';

      if (typeof n === 'undefined' || n === null) {
        item = '';
      }

      if (this.lastIndexOf(n) === this.length - 1) {
        joinedArr += item;
        break;
      }
      joinedArr += item + pseudoSeparator;
    }

    return joinedArr;
  };
}

module.exports = applyCustomJoin;
