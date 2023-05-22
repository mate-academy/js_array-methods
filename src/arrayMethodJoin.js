'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let value = separator;

    if (value === undefined) {
      value = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] == null) {
        result += '';
      } else {
        result += this[i];
      }

      if (i < this.length - 1) {
        result += value;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
