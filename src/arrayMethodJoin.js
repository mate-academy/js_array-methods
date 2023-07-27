'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrLength = this.length;
    let result = '';

    for (let i = 0; i < arrLength; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (this.length - 1 !== i) {
        result += separator;
      }
    };

    return result;
  };
}

module.exports = applyCustomJoin;
