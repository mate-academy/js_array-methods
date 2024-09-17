'use strict';

/**
 * Implement method join
 */
function applyCustomJoin(...args) {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {

        str += this[i];
      }

      if (i + 1 < this.length) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
