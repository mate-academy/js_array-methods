'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringFromArray = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element !== undefined && element !== null) {
        stringFromArray += element;
      }

      if (i !== this.length - 1) {
        stringFromArray += separator;
      }
    }

    return stringFromArray;
  };
}

module.exports = applyCustomJoin;
