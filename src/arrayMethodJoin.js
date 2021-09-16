'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let input = separator;
    let result = '';

    if (input === undefined) {
      input = ',';
    }

    if (input === null) {
      input = String(input);
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        input = '';
      }

      result += this[i] + input;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
