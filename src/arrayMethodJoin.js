'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      joinedString += `${this[i]}${separator}`;
    }

    if (this[this.length - 1] !== undefined) {
      joinedString += this[this.length - 1];
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
