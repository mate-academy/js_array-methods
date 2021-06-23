'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedElements = '';

    for (const item of this) {
      if (item !== undefined && item !== null) {
        joinedElements += item;
      }

      if (item !== this[this.length - 1]) {
        joinedElements += separator;
      }
    }

    return joinedElements;
  };
}

module.exports = applyCustomJoin;
