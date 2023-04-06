'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    if (this.length === 0) {
      return '';
    }

    let returnedValue = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && this[i] === undefined) {
        continue;
      } else if (this[i] === undefined || this[i] === null) {
        returnedValue += `${separator}`;
      } else if (i === this.length - 1) {
        returnedValue += `${this[i]}`;
      } else {
        returnedValue += `${this[i]}${separator}`;
      }
    }

    return returnedValue;
  };
}

module.exports = applyCustomJoin;
