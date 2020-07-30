'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let res = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (separator === undefined) {
        res += `${this[i]},`;
      } else if (this[i] === undefined || this[i] === null) {
        this[i] = separator;
        res += this[i];
      } else {
        res += `${this[i]}${separator}`;
      }
    }

    if (this.length === 0) {
      return '';
    }

    return `${res}${this[this.length - 1]}`;
  };
}

module.exports = applyCustomJoin;
