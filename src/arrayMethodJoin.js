'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let finalStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        finalStr += `${separator}`;
        continue;
      }

      if (i === this.length - 1) {
        finalStr += this[i];
      } else {
        finalStr += this[i] + `${separator}`;
      }
    }

    return finalStr;
  };
}

module.exports = applyCustomJoin;
