'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringWithoutLastElement = '';
    const lastElement = this[this.length - 1];
    let x = separator;

    if (x === null) {
      x = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      stringWithoutLastElement += this[i] + x;
    }

    if (lastElement === undefined) {
      return stringWithoutLastElement;
    }

    const result = stringWithoutLastElement + lastElement;

    return result;
  };
}

module.exports = applyCustomJoin;
