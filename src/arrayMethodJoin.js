'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedElement = '';

    for (let i = 0; i < this.length; i++) {
      const item = this[i];

      if (item !== undefined && item !== null) {
        joinedElement += item;
      }

      if (i !== this.length - 1) {
        joinedElement += separator;
      }
    }

    return joinedElement;
  };
}

module.exports = applyCustomJoin;
