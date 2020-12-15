'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let final = '';

    if (this.length === 0) {
      return final;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        final += this[i];
      }

      if (i !== this.length - 1) {
        final += separator;
      }
    }

    return final;
  };
}

module.exports = applyCustomJoin;
