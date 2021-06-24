'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resOfJoinMethod = '';

    if (typeof (this) === 'object') {
      for (const key of this) {
        if (key !== undefined && key !== null) {
          resOfJoinMethod += key;
        }

        if (key !== this[this.length - 1]) {
          resOfJoinMethod += separator;
        }
      }
    }

    return resOfJoinMethod;
  };
}

module.exports = applyCustomJoin;
