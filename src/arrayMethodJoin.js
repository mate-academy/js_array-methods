'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element !== null && element !== undefined) {
        result += element;
      }

      if (i < this.length - 1) {
        result += separator;
      }
    };

    return result;
  };
}

module.exports = applyCustomJoin;
