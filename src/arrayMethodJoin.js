'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let resultOfJoin = '';

    for (const element of this) {
      if (element === null || element === undefined) {
        resultOfJoin += `${separator}`;
        continue;
      }

      if (element === this[this.length - 1]) {
        resultOfJoin += `${element}`;
        break;
      }

      resultOfJoin += `${element}${separator}`;
    }

    return resultOfJoin;
  };
}

module.exports = applyCustomJoin;
