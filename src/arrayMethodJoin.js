'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrLength = this.length;
    const lastElementIndex = arrLength - 1;
    let result = '';

    if (arrLength < 1) {
      return '';
    }

    if (arrLength === 1) {
      return `${this[0]}`;
    }

    for (let i = 0; i < lastElementIndex; i++) {
      if (this[i] === undefined) {
        this[i] = '';
      }

      if (this[i] !== null) {
        result += `${this[i]}`;
      }
      result += `${separator}`;
    }

    if (this[lastElementIndex] === null
      || this[lastElementIndex] === undefined) {
      this[lastElementIndex] = '';
    }
    result += this[lastElementIndex];

    return result;
  };
}

module.exports = applyCustomJoin;
