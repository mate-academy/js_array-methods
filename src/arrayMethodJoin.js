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

      const item = this[i];
      const isValid = item === null || item === undefined;
      const element = isValid ? '' : item;

      result += element;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
