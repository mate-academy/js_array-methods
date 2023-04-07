'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let joinedArray = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinedArray += `${this[i]}${separator}`;
      } else {
        joinedArray += separator;
      }
    }

    if (this[this.length - 1] !== undefined && this[this.length - 1] !== null) {
      joinedArray += this[this.length - 1];
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
