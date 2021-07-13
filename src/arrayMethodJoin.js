'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinAll = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinAll += this[i];
      }

      if (i < this.length - 1) {
        joinAll += separator;
      }
    }

    return joinAll;
  };
}

module.exports = applyCustomJoin;
