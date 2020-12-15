'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinMethod = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinMethod += this[i];
      }

      if (i !== this.length - 1) {
        joinMethod += separator;
      }
    }

    return joinMethod;
  };
}

module.exports = applyCustomJoin;
