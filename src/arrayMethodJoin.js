'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    if (this.length === 0) {
      return '';
    }

    let string = this[0] === null || this[0] === undefined ? '' : `${this[0]}`;

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separator === undefined) {
        string = string + ',' + this[i];
      } else {
        string = string + separator + this[i];
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
