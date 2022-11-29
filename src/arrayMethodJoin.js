'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    const lastItem = this[this.length - 1];
    let joinedArray = '';
    const separatorToString = String(separator);

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinedArray += separatorToString;
      } else {
        joinedArray += `${this[i] + separatorToString}`;
      }
    }

    if (lastItem) {
      joinedArray += lastItem;
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
