'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultOfJoinMethod = '';

    for (const key of this) {
      if (key !== undefined && key !== null) {
        resultOfJoinMethod += key;
      }

      if (key !== this[this.length - 1]) {
        resultOfJoinMethod += separator;
      }
    }

    return resultOfJoinMethod;
  };
}

module.exports = applyCustomJoin;
