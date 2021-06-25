'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedSeparator = '';

    if (this.length === 0) {
      return joinedSeparator;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinedSeparator += `${separator}`;
      } else {
        joinedSeparator += `${this[i]}${separator}`;
      }
    }
    joinedSeparator += this[this.length - 1];

    return joinedSeparator;
  };
};

module.exports = applyCustomJoin;
