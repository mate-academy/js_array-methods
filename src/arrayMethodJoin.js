'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const lastItem = this[this.length - 1];

    for (let i = 0; i < this.length - 1; i++) {
      const currentItem = this[i];

      if (currentItem !== null && currentItem !== undefined) {
        joinedString += currentItem;
      }

      joinedString += separator;
    }

    if (lastItem !== null && lastItem !== undefined) {
      joinedString += lastItem;
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
