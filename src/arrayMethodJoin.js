'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joined = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = separator;
        joined += this[i];
      } else if (separator === null) {
        joined += this[i] + 'null';
      } else if (separator === undefined) {
        joined += this[i];
      } else if (this) {
        joined += this[i] + separator;
      }
    }

    return joined + this.slice(-1);
  };
}

module.exports = applyCustomJoin;
