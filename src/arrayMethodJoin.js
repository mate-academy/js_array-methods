'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedElements = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinedElements += this[i];
      }

      joinedElements += separator;
    }

    const lastElement = this[this.length - 1];

    if (lastElement === null || lastElement === undefined) {
      return joinedElements;
    }

    return joinedElements + lastElement;
  };
}

module.exports = applyCustomJoin;
