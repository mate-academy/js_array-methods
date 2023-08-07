'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        result += separator;
      }

      const element = this[i] === null || this[i] === undefined ? '' : this[i];

      result += element;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
