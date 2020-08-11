'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let a = 0; a < this.length; a++) {
      if (this[a] === null || this[a] === undefined) {
        result += separator;
        continue;
      }

      result += this[a];

      if (a === this.length - 1) {
        break;
      }

      result += separator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
