'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
        separatStr += this[i];
      }

      if (i === this.length - 1) {
        separatStr += this[i];
      } else {
        separatStr += `${this[i]}${separator}`;
      }
    }

    return separatStr;
  };
}

module.exports = applyCustomJoin;
