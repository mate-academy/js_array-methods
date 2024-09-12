'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let result = (this[0] === undefined || this[0] === null)
      ? ''
      : String(this[0]);

    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += separator;
        continue;
      }
      result += separator + String(this[i]);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
