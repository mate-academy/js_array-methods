'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const stringSeparator = String(separator);
    let result = '';

    if (this.length === 0 || this.length === 1) {
      return this.toString();
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += stringSeparator;
      } else if (i !== this.length - 1) {
        result += this[i] + stringSeparator;
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
