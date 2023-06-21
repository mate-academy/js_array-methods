'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringFromArray = '';

    for (let i = 0; i < this.length; i++) {
      const current = this[i] === null || this[i] === undefined ? '' : this[i];

      stringFromArray += current;

      if (i !== this.length - 1) {
        stringFromArray += separator;
      }
    }

    return stringFromArray;
  };
}

module.exports = applyCustomJoin;
