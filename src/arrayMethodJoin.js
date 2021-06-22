'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinedItems = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinedItems += this[i];
      }

      if (i !== this.length - 1) {
        joinedItems += separator;
      }
    }

    return joinedItems;
  };
}

module.exports = applyCustomJoin;
