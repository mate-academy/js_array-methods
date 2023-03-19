'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const sep = String(separator);

    for (let i = 0; i < this.length; i++) {
      if (i === (this.length - 1) && !this[i]) {
        return result;
      } else if (this[i] === null || this[i] === undefined) {
        result += sep;
      } else if ((i + 1) !== this.length) {
        result += this[i] + sep;
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
