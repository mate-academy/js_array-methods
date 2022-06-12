'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strResult = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        strResult += this[i];
      }

      strResult += separator;
    }

    if (this[this.length - 1] !== null && this[this.length - 1] !== undefined) {
      strResult += this[this.length - 1];
    }

    return strResult;
  };
}

module.exports = applyCustomJoin;
