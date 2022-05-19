'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null) {
        result += `${separator}`;
      } else if (typeof this[i] === 'undefined' && i === this.length - 1) {
        continue;
      } else if (typeof this[i] === 'undefined') {
        result += `${separator}`;
      } else if (i === this.length - 1) {
        result += `${this[i]}`;
      } else {
        result += `${this[i]}${separator}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
