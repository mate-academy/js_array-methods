'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinedEntries = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinedEntries += this[i];
      }

      if (i < (this.length - 1)) {
        joinedEntries += separator;
      }
    }

    return joinedEntries;
  };
}

module.exports = applyCustomJoin;
