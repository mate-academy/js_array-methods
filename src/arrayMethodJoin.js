'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let joined = '';
    let realSeparator = separator;

    if (separator === undefined) {
      realSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joined += this[i];
      }

      if (i < (this.length - 1)) {
        joined += realSeparator;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
