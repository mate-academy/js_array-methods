'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringArray = '';

    for (let i = 0; i < this.length; i++) {
      const arrayElement = this[i];

      if (arrayElement !== undefined && arrayElement !== null) {
        stringArray += arrayElement;
      }

      if (i !== this.length - 1) {
        stringArray += separator;
      }
    };

    return stringArray;
  };
}

module.exports = applyCustomJoin;
