'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrayCopy = [...this];
    const len = this.length;

    let newSeparator = String(separator);
    let result = '';

    for (let i = 0; i < len; i++) {
      if (i === len - 1) {
        newSeparator = '';
      }

      if (this[i] === null || this[i] === undefined) {
        arrayCopy[i] = '';
      }

      result += arrayCopy[i] + newSeparator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
