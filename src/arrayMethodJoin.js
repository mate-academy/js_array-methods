'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let arr = '';

    if (this.length === 1) {
      return `${this}`;
    }

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] !== 'undefined' && this[i] !== null) {
        arr += this[i];
      }

      if (i !== this.length - 1) {
        arr += separator;
      }
    }

    return arr;
  };
}

module.exports = applyCustomJoin;
