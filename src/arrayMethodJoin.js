'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== this.length - 1) {
        if (this[i] === null) {
          this[i] = '';
        } else if (this[i] === undefined) {
          this[i] = '';
        }

        if (separator === undefined) {
          str += this[i] + ',';
        } else if (separator === null) {
          str += this[i] + 'null';
        } else {
          str += this[i] + separator;
        }
      } else {
        if (this[i] === undefined) {
          str += '';
        } else {
          str += this[i];
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
