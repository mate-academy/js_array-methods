'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joined = '';
    let iterationCount = 0;

    if (this.length === 0) {
      return '';
    }

    for (const item of this) {
      if (iterationCount < this.length - 1) {
        if (item !== undefined && item !== null) {
          joined += `${item}${separator}`;
        } else {
          joined += separator;
        }
      }
      iterationCount++;
    }

    return joined + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
