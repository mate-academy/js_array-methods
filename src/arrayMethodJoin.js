'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';
    const arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
      let item;

      if (this[i] === null || this[i] === undefined) {
        item = '';
      } else {
        item = this[i];
      }

      if (i === 0) {
        result += item;
        continue;
      }
      result += separator + '' + item;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
