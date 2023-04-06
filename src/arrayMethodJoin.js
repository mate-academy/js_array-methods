'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let returnedValue = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        returnedValue += (i === this.length - 1) ? '' : separator;
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
