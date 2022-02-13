'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let index = 0; index < this.length; index++) {
      if (this[index] !== null
        && this[index] !== undefined) {
        result += this[index];
      }

      if (index + 1 !== this.length) {
        result += separator;
      }
    }

    return result;
  };
};

module.exports = applyCustomJoin;
