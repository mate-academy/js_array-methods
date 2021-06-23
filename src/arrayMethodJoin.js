'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedElements = '';
    const separation = separator === undefined
      ? ','
      : separator;

    for (const item of this) {
      if (item !== undefined && item !== null) {
        joinedElements += item;
      }

      if (item !== this[this.length - 1]) {
        joinedElements += separation;
      }
    }

    return joinedElements;
  };
}

module.exports = applyCustomJoin;
