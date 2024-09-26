'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const lastItem = this.length - 1;

    for (const i of this) {
      if (i === null || i === undefined) {
        joinedString += '';
      } else {
        joinedString += i;
      }

      if (i !== this[lastItem]) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
