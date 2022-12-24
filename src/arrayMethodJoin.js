'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let tmpString = '';
    const lastKey = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        tmpString += this[i];
      }

      if (this[i] !== this[lastKey]) {
        tmpString += separator;
      }
    }

    return tmpString;
  };
}

module.exports = applyCustomJoin;
