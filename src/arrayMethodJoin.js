'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    const copy = [...this];
    let result = '';

    if (this.length === 0) {
      return '';
    }

    if (copy[copy.length - 1] === undefined) {
      copy[copy.length - 1] = '';
    }

    for (let i = 0; i < copy.length - 1; i++) {
      if (copy[i] === null || copy[i] === undefined) {
        copy[i] = '';
      }

      if (separator !== undefined) {
        result += copy[i] + `${separator}`;
      }
    }

    return result + copy[copy.length - 1];
  };
}

module.exports = applyCustomJoin;
