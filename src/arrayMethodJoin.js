'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(item = ',') {
    let result = '';
    let separator = item;

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        separator = '';
      }

      if (this[i] === null || this[i] === undefined) {
        result += separator;
      } else {
        result += this[i] + separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
