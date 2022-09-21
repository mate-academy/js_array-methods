'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joined = '';

    if (this.length === 0) {
      return joined;
    }

    for (let index = 0; index < this.length - 1; index += 1) {
      if (this[index] !== undefined && this[index] !== null) {
        joined += this[index];
      }

      joined += separator;
    }

    if (this[this.length - 1] !== undefined && this[this.length - 1] !== null) {
      joined += this[this.length - 1];
    }

    return joined;
  };
}
module.exports = applyCustomJoin;
