'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finalResult = '';

    for (let i = 0; i < this.length; i++) {
      const arrayElement = this[i];

      if (arrayElement !== null && arrayElement !== undefined) {
        finalResult += arrayElement;
      }

      if (i !== this.length - 1) {
        finalResult += separator;
      }
    }

    return finalResult;
  };
}

module.exports = applyCustomJoin;
