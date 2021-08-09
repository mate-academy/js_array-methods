'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined) {
        result = result + separator;
        continue;
      }

      if (this[i] === null) {
        result = result + separator;
        continue;
      }

      result += this[i];

      if (i !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
