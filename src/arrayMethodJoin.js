'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringFromArray = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && typeof this[i] !== 'undefined') {
        stringFromArray += `${this[i]}`;

        return stringFromArray;
      } else if (i === this.length - 1) {
        return stringFromArray;
      }

      if (typeof this[i] !== 'undefined' && typeof this[i] !== 'object') {
        stringFromArray += `${this[i]}${separator}`;
        continue;
      }
      stringFromArray += `${separator}`;
    }

    return stringFromArray;
  };
}

module.exports = applyCustomJoin;
