'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedElements = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        joinedElements += separator;
      }

      if (this[i] !== null && this[i] !== undefined) {
        joinedElements += this[i];
      }
    }

    return joinedElements;
  };
}

module.exports = applyCustomJoin;
