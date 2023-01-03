'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finalMethod = '';

    for (let i = 0; i < this.length; i++) {
      const item = this[i];

      if (item !== undefined && item !== null) {
        finalMethod += `${item}`;
      }

      if (i !== this.length - 1) {
        finalMethod += separator;
      }
    }

    return finalMethod;
  };
}

module.exports = applyCustomJoin;
