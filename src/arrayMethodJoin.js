'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const last = this[this.length - 1];

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += separator;
      } else {
        result += `${this[i]}${separator}`;
      }
    }

    if (last === null || last === undefined) {
      return result;
    } else {
      result += last;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
