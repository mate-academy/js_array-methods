'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        // `${result}${separator}`
        result = result + separator;
        continue;
      }

      if (i === this.length - 1) {
        // `${result}${this[i]}`
        result = result + this[i];
        continue;
      }
      // `${result}${this[i]}${separator}`
      result = result + this[i] + separator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
