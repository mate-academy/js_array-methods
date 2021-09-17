'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 1) {
      if (this[0] === null || this[0] === undefined) {
        return '';
      }

      return this[0] + '';
    }

    let result = '';

    for (let index = 0; index < this.length; index++) {
      if (this[index] === undefined || this[index] === null) {
        result += '';
      } else {
        result += this[index];
      }

      if (index < this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
