'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let copyOfSeparator = separator;

    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === this[this.length - 1]) {
        copyOfSeparator = '';
      } else if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      } else if (copyOfSeparator === undefined) {
        copyOfSeparator = ',';
      } else if (copyOfSeparator === null) {
        copyOfSeparator = 'null';
      }
      str += this[i] + copyOfSeparator;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
