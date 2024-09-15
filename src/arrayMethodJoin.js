'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strResult = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        strResult += this[i];
      }

      if (i !== this.length - 1) {
        strResult += `${separator}`;
      }
    }

    return strResult;
  };
}

module.exports = applyCustomJoin;
