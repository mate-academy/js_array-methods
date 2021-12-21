'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let concat = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        concat += this[i];
      }

      if (i !== this.length - 1) {
        concat += separator;
      }
    }

    return concat;
  };
}

module.exports = applyCustomJoin;
