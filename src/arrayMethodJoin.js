'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedElements = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinedElements += this[i];
      }

      if (i !== this.length - 1) {
        joinedElements += separator;
      }
    }

    return joinedElements;
  };
}

module.exports = applyCustomJoin;
