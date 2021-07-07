'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const adder = (this[i] !== undefined && this[i] !== null)
        ? this[i] : '';

      if (i !== this.length - 1) {
        result = result + adder + separator;
      } else {
        result = result + adder;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
