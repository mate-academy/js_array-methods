'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  // write code here
  [].__proto__.join2 = function(separator = ',') {
    let results = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        results += this[i];
      }

      if (i !== this.length - 1) {
        results += separator;
      }
    }

    return results;
  };
}

module.exports = applyCustomJoin;
