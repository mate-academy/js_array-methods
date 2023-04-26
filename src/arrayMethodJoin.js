'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let count = 0;

    for (const mass of this) {
      if (mass !== undefined && mass !== null) {
        result += mass;
      }

      if (count !== this.length - 1) {
        result += separator;
      }

      count++;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
