'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const len = this.length;

    let result = '';
    let count = 0;

    if (len === 0) {
      return '';
    }

    for (const i of this) {
      if (count === len - 1) {
        break;
      }

      if (i === null || i === undefined) {
        result = result + separator;
      }

      if (i !== null && i !== undefined) {
        result = result + i + separator;
      }

      count++;
    }

    if (this[len - 1] !== null && this[len - 1] !== undefined) {
      result = result + this[len - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
