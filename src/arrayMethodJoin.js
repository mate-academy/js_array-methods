'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinElements = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinElements += '';
      } else {
        joinElements += `${this[i]}`;
      }

      if (i === this.length - 1) {
        return joinElements;
      }
      joinElements += `${separator}`;
    }

    return joinElements;
  };
}

module.exports = applyCustomJoin;
