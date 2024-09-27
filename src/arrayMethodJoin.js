'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let join = '';

    for (const value of this) {
      if (value === this[this.length - 1]) {
        join += value;
      } else if (value === null || value === undefined) {
        join += separator;
      } else {
        join += '' + value + separator;
      }
    }

    return join;
  };
}

module.exports = applyCustomJoin;
