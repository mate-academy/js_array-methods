'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringFromArray = '';
    const length = this.length;

    for (let i = 0; i < length; i++) {
      if (this[i] === null || this[i] === undefined) {
        stringFromArray += separator;
        continue;
      }

      stringFromArray += this[i];

      if (i !== length - 1) {
        stringFromArray += separator;
      }
    }

    return stringFromArray;
  };
}

module.exports = applyCustomJoin;
