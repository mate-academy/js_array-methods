'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    const lastItemIndex = this.length - 1;
    let joinString = '';

    for (const item of this) {
      if (item !== null && item !== undefined) {
        joinString += item;
      }

      if (item !== this[lastItemIndex]) {
        joinString += separator;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
