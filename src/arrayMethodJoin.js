'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinString = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        joinString += `${this[i]}`;
      } else if (this[i] !== null && this[i] !== undefined) {
        joinString += `${this[i]}${separator}`;
      } else {
        joinString += `${separator}`;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
