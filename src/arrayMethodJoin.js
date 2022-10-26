'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newStr = '';
    const lastItem = this.length - 1;

    for (const i of this) {
      if (i === null || i === undefined) {
        newStr += '';
      } else {
        newStr += i;
      }

      if (i !== this[lastItem]) {
        newStr += separator;
      }
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
