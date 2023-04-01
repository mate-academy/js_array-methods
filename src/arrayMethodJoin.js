'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strArray = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (this[i] !== undefined && this[i] !== null) {
        strArray += element;
      }

      if (i < this.length - 1) {
        strArray += separator;
      }
    }

    return strArray;
  };
}

module.exports = applyCustomJoin;
