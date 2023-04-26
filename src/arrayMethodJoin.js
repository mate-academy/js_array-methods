'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        result += separator;
      }

      if (typeof this[i] === 'undefined' || this[i] === null) {
        result += '';
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
