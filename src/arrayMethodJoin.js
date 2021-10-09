'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // eslint-disable-next-line no-unused-vars
    let word = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        word += `${separator}`;
      } else {
        word += this[i] + `${separator}`;
      }
    }

    return word + `${this[this.length - 1]}`;
  };
}

module.exports = applyCustomJoin;
