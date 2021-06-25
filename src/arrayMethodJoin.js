'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedElements = '';

    for (const key of this) {
      if (key !== undefined && key !== null) {
        joinedElements += key;
      }

      if (key !== this[this.length - 1]) {
        joinedElements += separator;
      }
    }

    return joinedElements;
  };
}

module.exports = applyCustomJoin;
