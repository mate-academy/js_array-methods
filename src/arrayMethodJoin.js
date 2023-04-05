'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArray = '';

    for (let i = 0; i < this.length; i++) {
      const el = this[i];

      if (el !== undefined && el !== null) {
        joinedArray += el;
      };

      if (i !== (this.length - 1)) {
        joinedArray += separator;
      }
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
