'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here

    let separate = separator;

    if (this.length === 0) {
      return '';
    }

    if (separator === undefined) {
      separate = ',';
    }

    let result = String(this[0]);

    if (this[0] === null || this[0] === undefined) {
      result = '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += separate + '';
      } else {
        result += separate + String(this[i]);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
