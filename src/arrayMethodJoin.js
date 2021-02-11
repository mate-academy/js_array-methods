'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    let initialWord = this[0];

    for (let i = 1; i < this.length; i++) {
      if (initialWord === null) {
        initialWord = '';
      }

      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separator === null) {
        initialWord += `${separator}` + this[i];
      } else {
        initialWord += separator + this[i];
      }
    }

    return initialWord.toString();
  };
}

module.exports = applyCustomJoin;
