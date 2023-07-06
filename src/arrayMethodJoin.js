'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    const sep = separator === undefined ? ',' : String(separator);

    let result = this[0] === null ? '' : String(this[0]);

    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined
        || this[i] === null) {
        result += sep;
      } else {
        result += sep + String(this[i]);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
