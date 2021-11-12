'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let concatenatedStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        concatenatedStr += this[i];
      }

      if (i + 1 < this.length) {
        concatenatedStr += separator;
      }
    }

    return concatenatedStr;
  };
}

module.exports = applyCustomJoin;
