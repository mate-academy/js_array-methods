'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here

    let str = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (this[i] === 'NaN') {
        this[i] = 'NaN';
      }

      if (i < this.length - 1) {
        if (separator === null) {
          str += this[i] + 'null';
        } else {
          str += this[i] + separator;
        }
      }
    }

    return str + this[this.length - 1];
  };
}
module.exports = applyCustomJoin;
