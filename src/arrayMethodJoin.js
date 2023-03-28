'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let sep = separator !== undefined
    && separator !== null ? String(separator) : ',';

    if (separator === null) {
      sep = null;
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        result += sep;
      }

      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else {
        result += String(this[i]);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
