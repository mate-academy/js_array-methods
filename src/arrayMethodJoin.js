'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';
    let sepanullator = separator;

    if (separator === null) {
      sepanullator = 'null';
    }

    for (let i = 0; i <= this.length - 1; i++) {
      if (
        (this[i] === null || this[i] === undefined)
        && i === this.length - 1) {
        break;
      }

      if (this[i] === null || this[i] === undefined) {
        newString += sepanullator;
        continue;
      }

      if (i === this.length - 1) {
        newString += this[i];
        break;
      }

      newString += this[i] + sepanullator;
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
