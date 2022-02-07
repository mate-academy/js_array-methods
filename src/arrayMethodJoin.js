'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let join = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        join += this[i];
      }

      if (i !== this.length - 1) {
        join += separator;
      }
    }

    return join;
  };
}

module.exports = applyCustomJoin;
