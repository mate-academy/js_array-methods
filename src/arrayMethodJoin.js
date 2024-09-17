'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    let result = this[0] === null ? '' : String(this[0]);

    for (let i = 1; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += String(separator) + this[i];
      } else {
        result += String(separator);
      }
    }

    return String(result);
  };
}

module.exports = applyCustomJoin;
