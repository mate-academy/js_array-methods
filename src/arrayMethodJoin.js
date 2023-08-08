'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringResult = '';

    for (let i = 0; i < this.length; i++) {
      const arrayItem = this[i];

      if ((arrayItem !== undefined) && (arrayItem !== null)) {
        stringResult += arrayItem;
      }

      if (i !== this.length - 1) {
        stringResult += separator;
      }
    }

    return stringResult;
  };
}

module.exports = applyCustomJoin;
