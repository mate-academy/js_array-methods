'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (const value of this) {
      if (value !== undefined && value !== null) {
        string += value;
      }

      if (value !== this[this.length - 1]) {
        string += separator;
      }
    }

    return string;
  };
};

module.exports = applyCustomJoin;
