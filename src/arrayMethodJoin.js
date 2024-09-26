'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i < this.length - 1) {
        result = result + this[i] + separator;
      } else {
        result += this[i];
      }
    };

    return result;
  };
}

module.exports = applyCustomJoin;
