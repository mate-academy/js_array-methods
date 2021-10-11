'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === typeof null) {
        result += `${separator}`;
        continue;
      }

      if (typeof this[i] === typeof undefined) {
        result += `${separator}`;
        continue;
      }

      if (i === this.length - 1) {
        result += `${this[i]}`;
      } else {
        result += `${this[i]}${separator}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
