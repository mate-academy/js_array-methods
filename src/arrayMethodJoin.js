'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultOfJoinMethod = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        resultOfJoinMethod += this[i];
      }

      if (i < this.length - 1) {
        resultOfJoinMethod += separator;
      }
    }

    return resultOfJoinMethod;
  };
}

module.exports = applyCustomJoin;
