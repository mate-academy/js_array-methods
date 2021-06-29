'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let join = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        join += this[i];
      }

      if (i < this.length - 1) {
        join += separator;
      }
    }

    return join;
  };
}

module.exports = applyCustomJoin;
