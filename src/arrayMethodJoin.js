'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let i = 0;

    const emptiness = '';
    const coma = ',';

    for (i; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        str += emptiness;
      } else {
        str += this[i];
      }

      if (separator === undefined) {
        str += coma;
      } else {
        str += separator;
      }
    }

    if (this[this.length - 1] !== undefined) {
      str += this[this.length - 1];
    }

    return str;
  };
}

module.exports = applyCustomJoin;
