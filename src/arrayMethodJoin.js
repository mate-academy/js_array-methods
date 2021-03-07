'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (separator === undefined) {
        if (this[i] === null || this[i] === undefined) {
          str += ',';
        } else if (i !== this.length - 1) {
          str += `${this[i]},`;
        } else {
          str += `${this[i]}`;
        }
      } else {
        if (this[i] === null || this[i] === undefined) {
          str += `${separator}`;
        } else if (i !== this.length - 1) {
          str += `${this[i]}${separator}`;
        } else {
          str += `${this[i]}`;
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
