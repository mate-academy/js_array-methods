'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let str = '';
    let newSeparator = separator;

    if (this.length === 0) {
      return str;
    }

    if (newSeparator === undefined) {
      newSeparator = ',';
    }

    for (let index = 0; index < this.length - 1; index++) {
      if (this[index] === undefined || this[index] === null) {
        str += `${newSeparator}`;
      } else {
        str += `${this[index]}${newSeparator}`;
      }
    }

    return str + `${this[this.length - 1]}`;
  };
}

module.exports = applyCustomJoin;
