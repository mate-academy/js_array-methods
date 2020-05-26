'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let concatanedString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        concatanedString += `${separator}`;
      } else if (i !== this.length - 1) {
        concatanedString += `${this[i]}${separator}`;
      } else {
        concatanedString += this[i];
      }
    }

    return concatanedString;
  };
}

module.exports = applyCustomJoin;
