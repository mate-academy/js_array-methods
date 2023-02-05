'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        str += this[i];
      }

      if (i !== this.length - 1) {
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
