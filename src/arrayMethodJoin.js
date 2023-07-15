'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let sep = separator;
    let result = '';

    if (separator === undefined) {
      sep = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        if (i !== this.length - 1) {
          result += sep;
        }
        continue;
      }
      result += this[i];

      if (i !== this.length - 1) {
        result += sep;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
