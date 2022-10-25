'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultOfJoin = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        resultOfJoin += this[i];
      }

      if (i < this.length - 1) {
        resultOfJoin += separator;
      }
    }

    return resultOfJoin;
  };
}

module.exports = applyCustomJoin;
