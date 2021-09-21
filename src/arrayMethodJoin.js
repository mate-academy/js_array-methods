'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        result = result + separator;
        continue;
      }

      if (i === this.length - 1) {
        result = result + this[i];
      } else {
        result = result + this[i] + separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
