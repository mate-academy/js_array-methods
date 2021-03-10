'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this.length === 0
        || this[i] === null
        || this[i] === undefined) {
        this[i] = '';
      }

      if (this[i] !== null || this[i] !== undefined) {
        result = result + this[i];
      }

      if (i !== this.length - 1) {
        result = result + separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
