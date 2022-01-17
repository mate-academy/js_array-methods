'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let value = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        value = value + this[i] + separator;
      } else {
        value = value + separator;
      }
    };

    if (this[this.length - 1] !== undefined && this[this.length - 1] !== null) {
      value = value + this[this.length - 1];
    }

    return value;
  };
}

module.exports = applyCustomJoin;
