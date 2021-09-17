'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrLength = this.length;
    let res = '';

    if (arrLength === 0) {
      return '';
    }

    for (let i = 0; i < arrLength; i++) {
      if (this[i] === null || this[i] === undefined) {
        res += '';
      } else {
        res += this[i];
      }

      if (i < arrLength - 1) {
        res += separator;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
