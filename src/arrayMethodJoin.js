'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    let input = separator;

    if (!this || this.length === 0) {
      return string;
    }

    if (input === undefined) {
      input = ',';
    }

    input = '' + input;

    const numbersMaxIndex = this.length - 1;

    for (let i = 0; i < numbersMaxIndex; i++) {
      if (this[i] === null || this[i] === undefined) {
        string += '' + input;
      } else {
        string += this[i] + input;
      }
    }

    const result = string + this[numbersMaxIndex];

    return result;
  };
}

module.exports = applyCustomJoin;
