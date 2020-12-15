'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let joinedElements = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
      joinedElements = joinedElements + this[i] + separator;
    }

    return joinedElements + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
