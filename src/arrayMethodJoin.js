'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    if (this.length === 0) {
      return str;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (separator === undefined) {
        str += this[i] + ',';
      } else if (this[i] === null || this[i] === undefined) {
        this[i] = separator;
        str += this[i];
      } else if (separator === null) {
        str += this[i] + 'null';
      } else {
        str += this[i] + separator;
      }
    }

    return (str + this[this.length - 1]);
    // write code here
  };
}

module.exports = applyCustomJoin;
