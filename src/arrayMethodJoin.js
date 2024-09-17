'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let element = 0; element < this.length; element++) {
      if (this[element] === null || this[element] === undefined) {
        this[element] = '';
      }

      result += this[element];

      if (element < this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
