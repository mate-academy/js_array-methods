'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringFromArray = '';
    let separatorCopy = separator;

    if (this.length === 0) {
      return stringFromArray;
    }

    if (separator === null) {
      separatorCopy = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i + 1] === undefined && this[i] === this[this.length - 2]) {
        stringFromArray += this[i] + separator;

        return stringFromArray;
      }

      if (this[i] === null || this[i] === undefined) {
        stringFromArray += separatorCopy;
        continue;
      }
      stringFromArray += this[i] + separatorCopy;
    }

    stringFromArray += this[this.length - 1];

    return stringFromArray;
  };
}

module.exports = applyCustomJoin;
