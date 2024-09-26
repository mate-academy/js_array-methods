'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedElements = '';

    for (const element of this) {
      if (!(element === null || element === undefined)) {
        joinedElements += element;
      }

      if (element !== this[this.length - 1]) {
        joinedElements += separator;
      }
    }

    return joinedElements;
  };
}

module.exports = applyCustomJoin;
