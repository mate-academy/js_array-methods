'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    const lastItem = this.length - 1;
    let joinString = '';

    for (const item of this) {
      if (item === null || item === undefined) {
        joinString += '';
      } else {
        joinString += item;
      }

      if (item !== this[lastItem]) {
        joinString += separator;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
