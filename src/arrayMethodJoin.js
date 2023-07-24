'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += separator;
        continue;
      }
      result += this[i];

      if (i === this.length - 1) {
        break;
      }
      result += separator;
    }

    if (this[this.length - 1] === undefined) {
      result = result.slice(0, result.length - 1);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
