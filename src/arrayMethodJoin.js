'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finalStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        finalStr += this[i];
      }

      if (i < this.length - 1) {
        finalStr += separator;
      }
    }

    return finalStr;
  };
}

module.exports = applyCustomJoin;
