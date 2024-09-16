'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrLength = this.length;
    let strResult = '';

    for (let i = 0; i < arrLength; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      } else {
        strResult += this[i];
      }

      if (i !== arrLength - 1) {
        strResult += separator;
      }
    }

    return strResult;
  };
}

module.exports = applyCustomJoin;
