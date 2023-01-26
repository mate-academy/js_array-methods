'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this.length === 0) {
      return result;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        this[i] = '';
      }
      result += this[i];
      result += separator;
    }

    if (typeof this[this.length - 1] === 'undefined'
    || this[this.length - 1] === null) {
      this[this.length - 1] = '';
    }

    result += this[this.length - 1];

    return result;
  };
}

module.exports = applyCustomJoin;
