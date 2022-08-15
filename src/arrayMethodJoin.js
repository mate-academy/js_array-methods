'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let finallString = '';

    for (const item of this) {
      if (item !== undefined && item !== null) {
        finallString += item;
      }

      if (this.indexOf(item) !== this.length - 1) {
        finallString += separator;
      }
    }

    return finallString;
  };
}

module.exports = applyCustomJoin;
