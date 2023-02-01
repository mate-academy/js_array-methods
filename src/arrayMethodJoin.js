'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const lastElement = this.length - 1;

    for (let i = 0; i < lastElement; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += `${separator}`;
        continue;
      }

      result += this[i] + `${separator}`;
    }

    if (this[lastElement] !== null && this[lastElement] !== undefined) {
      result += this[lastElement];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
